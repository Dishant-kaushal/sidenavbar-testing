import { jsx as m } from "react/jsx-runtime";
import { forwardRef as x, useRef as b, useEffect as L, useMemo as S } from "react";
import k from "react-apexcharts";
import { Chart as y } from "../Chart/Chart.js";
import { useFaclonApexTheme as F } from "../Chart/apexchartsTheme.js";
/* empty css                         */
function h(p, o) {
  if (typeof window > "u") return `${o}px`;
  const t = getComputedStyle(document.documentElement).getPropertyValue(p).trim();
  return t ? /[a-z%]$/i.test(t) ? t : `${t}px` : `${o}px`;
}
const $ = x(
  ({
    value: p,
    label: o,
    apexOptions: t,
    onChartReady: a,
    ...c
  }, z) => {
    const e = F(), g = b(null), d = b(null);
    process.env.NODE_ENV !== "production" && ("showLegend" in c || "legendPosition" in c) && console.warn("[StrokedCircularGauge] `showLegend` / `legendPosition` have no effect on single-value gauges."), L(() => {
      const s = g.current;
      if (!s || typeof ResizeObserver > "u") return;
      let i = 0, l = !0;
      const f = new ResizeObserver(() => {
        if (l) {
          l = !1;
          return;
        }
        cancelAnimationFrame(i), i = requestAnimationFrame(
          () => {
            var r, u;
            return (u = (r = d.current) == null ? void 0 : r.updateOptions) == null ? void 0 : u.call(r, {}, !1, !1, !1);
          }
        );
      });
      return f.observe(s), () => {
        cancelAnimationFrame(i), f.disconnect();
      };
    }, []);
    const B = S(
      () => {
        var s, i, l, f, r, u, v, O, w, A;
        return {
          ...e,
          chart: {
            ...e.chart,
            type: "radialBar",
            offsetY: -10,
            events: {
              ...(s = e.chart) == null ? void 0 : s.events,
              mounted: (n) => {
                d.current = n, a == null || a(n);
              },
              updated: (n) => {
                d.current = n, a == null || a(n);
              }
            }
          },
          plotOptions: {
            ...e.plotOptions,
            radialBar: {
              ...(i = e.plotOptions) == null ? void 0 : i.radialBar,
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                ...(f = (l = e.plotOptions) == null ? void 0 : l.radialBar) == null ? void 0 : f.dataLabels,
                name: {
                  ...(v = (u = (r = e.plotOptions) == null ? void 0 : r.radialBar) == null ? void 0 : u.dataLabels) == null ? void 0 : v.name,
                  fontSize: h("--global-fz-16", 16),
                  offsetY: 120
                },
                value: {
                  ...(A = (w = (O = e.plotOptions) == null ? void 0 : O.radialBar) == null ? void 0 : w.dataLabels) == null ? void 0 : A.value,
                  offsetY: 76,
                  fontSize: h("--global-fz-24", 24),
                  formatter: (n) => `${n}%`
                }
              }
            }
          },
          states: {
            hover: { filter: { type: "none" } },
            active: { filter: { type: "none" } }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 0.15,
              inverseColors: !1,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
            }
          },
          stroke: {
            dashArray: 4
          },
          labels: o ? [o] : [],
          ...t
        };
      },
      [e, o, t]
    );
    return /* @__PURE__ */ m(y, { ref: z, ...c, children: /* @__PURE__ */ m("div", { ref: g, className: "fds-stroked-circular-gauge", children: /* @__PURE__ */ m(
      k,
      {
        type: "radialBar",
        series: [p],
        options: B,
        height: "100%"
      }
    ) }) });
  }
);
$.displayName = "StrokedCircularGauge";
export {
  $ as StrokedCircularGauge
};
