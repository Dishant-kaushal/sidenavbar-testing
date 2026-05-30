import { jsx as u } from "react/jsx-runtime";
import { forwardRef as Y, useRef as c, useEffect as $, useMemo as K } from "react";
import G from "react-apexcharts";
import { Chart as H } from "../Chart/Chart.js";
import { useFaclonApexTheme as I, FACLON_APEX_PALETTE_TOKENS as J } from "../Chart/apexchartsTheme.js";
/* empty css              */
function Q(f) {
  return typeof window > "u" ? "" : getComputedStyle(document.documentElement).getPropertyValue(f).trim();
}
const U = Y(
  ({
    series: f,
    labels: d,
    showLabels: m = !0,
    showLegend: g = !0,
    legendPosition: b = "bottom",
    apexOptions: O,
    onChartReady: o,
    ...M
  }, R) => {
    const e = I(), B = c(0), v = c(null), p = c(null);
    $(() => {
      const t = v.current;
      if (!t || typeof ResizeObserver > "u") return;
      let a = 0, i = !0;
      const n = new ResizeObserver(() => {
        if (i) {
          i = !1;
          return;
        }
        cancelAnimationFrame(a), a = requestAnimationFrame(
          () => {
            var l, s;
            return (s = (l = p.current) == null ? void 0 : l.updateOptions) == null ? void 0 : s.call(l, {}, !1, !1, !1);
          }
        );
      });
      return n.observe(t), () => {
        cancelAnimationFrame(a), n.disconnect();
      };
    }, []), B.current = f.reduce((t, a) => t + a, 0);
    const A = K(
      () => J.map((t) => Q(t)).filter((t) => t.length > 0),
      []
    ), X = K(
      () => {
        var t, a, i, n, l, s, F, S, E, N, w, T, k, z, L, V;
        return {
          ...e,
          chart: {
            ...e.chart,
            type: "radialBar",
            events: {
              ...(t = e.chart) == null ? void 0 : t.events,
              mounted: (r) => {
                p.current = r, o == null || o(r);
              },
              updated: (r) => {
                p.current = r, o == null || o(r);
              },
              // ApexCharts radialBar's default legend click is a no-op visually —
              // explicitly call toggleSeries(label) so behaviour matches the
              // axis charts (Column/Bar/Line/Area).
              legendClick: (r, W) => {
                var P, j, q, y, D;
                const _ = ((j = (P = r == null ? void 0 : r.opts) == null ? void 0 : P.labels) == null ? void 0 : j[W]) ?? ((D = (y = (q = r == null ? void 0 : r.w) == null ? void 0 : q.globals) == null ? void 0 : y.labels) == null ? void 0 : D[W]);
                _ && r.toggleSeries(_);
              }
            }
          },
          plotOptions: {
            ...e.plotOptions,
            radialBar: {
              ...(a = e.plotOptions) == null ? void 0 : a.radialBar,
              dataLabels: {
                ...(n = (i = e.plotOptions) == null ? void 0 : i.radialBar) == null ? void 0 : n.dataLabels,
                name: {
                  ...(F = (s = (l = e.plotOptions) == null ? void 0 : l.radialBar) == null ? void 0 : s.dataLabels) == null ? void 0 : F.name,
                  show: m,
                  fontWeight: 600
                },
                value: {
                  ...(N = (E = (S = e.plotOptions) == null ? void 0 : S.radialBar) == null ? void 0 : E.dataLabels) == null ? void 0 : N.value,
                  show: m,
                  fontWeight: 600
                },
                total: {
                  show: m,
                  label: "Total",
                  color: (z = (k = (T = (w = e.plotOptions) == null ? void 0 : w.radialBar) == null ? void 0 : T.dataLabels) == null ? void 0 : k.name) == null ? void 0 : z.color,
                  fontFamily: (L = e.chart) == null ? void 0 : L.fontFamily,
                  fontSize: "14px",
                  fontWeight: 600,
                  offsetY: -8,
                  formatter: () => `${B.current}`
                }
              }
            }
          },
          labels: d ?? [],
          legend: {
            ...e.legend,
            show: g,
            position: b,
            fontFamily: "'Noto Sans Variable', 'Noto Sans', sans-serif",
            fontSize: "14px",
            onItemClick: { toggleDataSeries: !1 },
            markers: {
              ...(V = e.legend) == null ? void 0 : V.markers,
              fillColors: A
            }
          },
          ...O
        };
      },
      [e, d, m, g, b, A, O]
    );
    return /* @__PURE__ */ u(H, { ref: R, ...M, children: /* @__PURE__ */ u("div", { ref: v, className: "fds-radial-bar", children: /* @__PURE__ */ u(
      G,
      {
        type: "radialBar",
        series: f,
        options: X,
        height: "100%"
      }
    ) }) });
  }
);
U.displayName = "RadialBar";
export {
  U as RadialBar
};
