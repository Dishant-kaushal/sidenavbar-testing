import { jsx as f, jsxs as B, Fragment as z } from "react/jsx-runtime";
import { forwardRef as k, useRef as w, useEffect as E, useMemo as G } from "react";
import j from "react-apexcharts";
import { Chart as Y } from "../Chart/Chart.js";
import { useFaclonApexTheme as q } from "../Chart/apexchartsTheme.js";
/* empty css                    */
const D = k(
  ({
    value: b,
    label: c,
    min: x = 0,
    max: L = 100,
    showRange: N = !0,
    apexOptions: u,
    onChartReady: n,
    ...m
  }, F) => {
    const e = q(), d = w(null), p = w(null);
    process.env.NODE_ENV !== "production" && ("showLegend" in m || "legendPosition" in m) && console.warn("[SemiCircleGauge] `showLegend` / `legendPosition` have no effect on single-value gauges."), E(() => {
      const a = d.current;
      if (!a || typeof ResizeObserver > "u") return;
      let t = 0, i = !0;
      const s = new ResizeObserver(() => {
        if (i) {
          i = !1;
          return;
        }
        cancelAnimationFrame(t), t = requestAnimationFrame(
          () => {
            var r, l;
            return (l = (r = p.current) == null ? void 0 : r.updateOptions) == null ? void 0 : l.call(r, {}, !1, !1, !1);
          }
        );
      });
      return s.observe(a), () => {
        cancelAnimationFrame(t), s.disconnect();
      };
    }, []);
    const S = G(
      () => {
        var a, t, i, s, r, l, g, v, O, h, A, _;
        return {
          ...e,
          chart: {
            ...e.chart,
            type: "radialBar",
            sparkline: { enabled: !0 },
            events: {
              ...(a = e.chart) == null ? void 0 : a.events,
              mounted: (o) => {
                p.current = o, n == null || n(o);
              },
              updated: (o) => {
                p.current = o, n == null || n(o);
              }
            }
          },
          states: {
            hover: { filter: { type: "none" } },
            active: { filter: { type: "none" } }
          },
          plotOptions: {
            ...e.plotOptions,
            radialBar: {
              ...(t = e.plotOptions) == null ? void 0 : t.radialBar,
              startAngle: -90,
              endAngle: 90,
              track: {
                ...(s = (i = e.plotOptions) == null ? void 0 : i.radialBar) == null ? void 0 : s.track,
                startAngle: -90,
                endAngle: 90
              },
              dataLabels: {
                ...(l = (r = e.plotOptions) == null ? void 0 : r.radialBar) == null ? void 0 : l.dataLabels,
                name: {
                  ...(O = (v = (g = e.plotOptions) == null ? void 0 : g.radialBar) == null ? void 0 : v.dataLabels) == null ? void 0 : O.name,
                  show: !!c,
                  offsetY: 20,
                  fontSize: "16px"
                },
                value: {
                  ...(_ = (A = (h = e.plotOptions) == null ? void 0 : h.radialBar) == null ? void 0 : A.dataLabels) == null ? void 0 : _.value,
                  show: !0,
                  offsetY: -20,
                  fontSize: "24px"
                }
              }
            }
          },
          labels: c ? [c] : [],
          ...u
        };
      },
      [e, c, u]
    );
    return /* @__PURE__ */ f(Y, { ref: F, ...m, children: /* @__PURE__ */ B("div", { ref: d, className: "fds-semi-circle-gauge", children: [
      /* @__PURE__ */ f(
        j,
        {
          type: "radialBar",
          series: [b],
          options: S,
          height: "100%"
        }
      ),
      N && /* @__PURE__ */ B(z, { children: [
        /* @__PURE__ */ f("span", { className: "fds-semi-circle-gauge__range fds-semi-circle-gauge__range--min", children: x }),
        /* @__PURE__ */ f("span", { className: "fds-semi-circle-gauge__range fds-semi-circle-gauge__range--max", children: L })
      ] })
    ] }) });
  }
);
D.displayName = "SemiCircleGauge";
export {
  D as SemiCircleGauge
};
