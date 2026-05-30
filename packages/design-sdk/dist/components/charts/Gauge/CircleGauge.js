import { jsx as f } from "react/jsx-runtime";
import { forwardRef as x, useRef as L, useEffect as z, useMemo as F } from "react";
import N from "react-apexcharts";
import { Chart as E } from "../Chart/Chart.js";
import { useFaclonApexTheme as G } from "../Chart/apexchartsTheme.js";
/* empty css                */
const j = x(
  ({
    value: b,
    label: c,
    hollowSize: m = "70%",
    apexOptions: d,
    onChartReady: t,
    ...p
  }, h) => {
    const e = G(), g = L(null), u = L(null);
    process.env.NODE_ENV !== "production" && ("showLegend" in p || "legendPosition" in p) && console.warn("[CircleGauge] `showLegend` / `legendPosition` have no effect on single-value gauges."), z(() => {
      const n = g.current;
      if (!n || typeof ResizeObserver > "u") return;
      let i = 0, s = !0;
      const a = new ResizeObserver(() => {
        if (s) {
          s = !1;
          return;
        }
        cancelAnimationFrame(i), i = requestAnimationFrame(
          () => {
            var r, o;
            return (o = (r = u.current) == null ? void 0 : r.updateOptions) == null ? void 0 : o.call(r, {}, !1, !1, !1);
          }
        );
      });
      return a.observe(n), () => {
        cancelAnimationFrame(i), a.disconnect();
      };
    }, []);
    const A = F(
      () => {
        var n, i, s, a, r, o, v, O, w, B;
        return {
          ...e,
          chart: {
            ...e.chart,
            type: "radialBar",
            events: {
              ...(n = e.chart) == null ? void 0 : n.events,
              mounted: (l) => {
                u.current = l, t == null || t(l);
              },
              updated: (l) => {
                u.current = l, t == null || t(l);
              }
            }
          },
          plotOptions: {
            ...e.plotOptions,
            radialBar: {
              ...(i = e.plotOptions) == null ? void 0 : i.radialBar,
              hollow: {
                size: m
              },
              dataLabels: {
                ...(a = (s = e.plotOptions) == null ? void 0 : s.radialBar) == null ? void 0 : a.dataLabels,
                name: {
                  ...(v = (o = (r = e.plotOptions) == null ? void 0 : r.radialBar) == null ? void 0 : o.dataLabels) == null ? void 0 : v.name,
                  show: !!c,
                  fontSize: "16px"
                },
                value: {
                  ...(B = (w = (O = e.plotOptions) == null ? void 0 : O.radialBar) == null ? void 0 : w.dataLabels) == null ? void 0 : B.value,
                  show: !0,
                  fontSize: "24px"
                }
              }
            }
          },
          labels: c ? [c] : [],
          ...d
        };
      },
      [e, c, m, d]
    );
    return /* @__PURE__ */ f(E, { ref: h, ...p, children: /* @__PURE__ */ f("div", { ref: g, className: "fds-circle-gauge", children: /* @__PURE__ */ f(
      N,
      {
        type: "radialBar",
        series: [b],
        options: A,
        height: "100%"
      }
    ) }) });
  }
);
j.displayName = "CircleGauge";
export {
  j as CircleGauge
};
