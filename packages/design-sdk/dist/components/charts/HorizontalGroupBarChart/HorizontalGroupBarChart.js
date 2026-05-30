import { jsxs as k, jsx as s } from "react/jsx-runtime";
import { forwardRef as W, useRef as y, useState as B, useEffect as D, useCallback as J, useMemo as K } from "react";
import C from "highcharts";
import V from "highcharts-react-official";
import { Chart as Q } from "../Chart/Chart.js";
import { useFaclonChartTheme as T, readCssVar as E } from "../Chart/highchartsTheme.js";
/* empty css                            */
const X = V.default ?? V, Y = W(
  ({
    series: u,
    categories: z,
    stacked: N = !1,
    showLegend: H = !0,
    showDataLabels: R = !1,
    dataLabelFormat: m,
    onPointClick: h,
    colors: g,
    xAxisTitle: b,
    yAxisTitle: p,
    yAxisUnit: x,
    plotLines: i,
    plotBands: d,
    highchartsOptions: v,
    bare: $ = !1,
    onChartReady: _,
    ...j
  }, q) => {
    const o = T(), S = y(null), A = y(null), w = y(null), [G, O] = B(() => /* @__PURE__ */ new Set());
    D(() => {
      const r = A.current;
      if (!r || typeof ResizeObserver > "u") return;
      let l = 0, t = !0;
      const a = new ResizeObserver(() => {
        if (t) {
          t = !1;
          return;
        }
        cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          var n;
          return (n = S.current) == null ? void 0 : n.reflow();
        });
      });
      return a.observe(r), () => {
        cancelAnimationFrame(l), a.disconnect();
      };
    }, []);
    const M = J((r, l) => {
      var c;
      const t = S.current, a = (c = t == null ? void 0 : t.series) == null ? void 0 : c[l];
      if (!a) return;
      const n = !a.visible;
      a.setVisible(n, !0), O((f) => {
        const e = new Set(f);
        return n ? e.delete(r) : e.add(r), e;
      });
    }, []), P = K(() => {
      var n, c, f;
      const r = u.map((e) => ({
        type: "bar",
        name: e.name,
        data: e.data,
        color: e.color
      })), l = d == null ? void 0 : d.map((e) => ({
        from: e.from,
        to: e.to,
        color: e.color ?? "rgba(239,68,68,0.1)",
        zIndex: e.zIndex ?? 0,
        ...e.label && {
          label: { text: e.label, align: e.labelAlign ?? "right" }
        }
      })), t = i == null ? void 0 : i.map((e) => ({
        value: e.value,
        color: (e.color ?? E("--border-error-default")) || "#ef4444",
        width: e.width ?? 2,
        dashStyle: e.dashStyle ?? "Dash",
        zIndex: e.zIndex ?? 5,
        ...e.label && {
          label: {
            text: e.label,
            align: e.labelAlign ?? "right",
            style: { color: (e.color ?? E("--border-error-default")) || "#ef4444" }
          }
        }
      })), a = {
        ...o,
        ...g && { colors: g },
        chart: {
          ...o.chart,
          type: "bar",
          /* Horizontal bar charts have the value axis on the BOTTOM, not the
             right — so the theme's symmetric spacingRight: 32 wastes space.
             Tighten left (Highcharts still auto-extends marginLeft to fit
             the category labels) and relax right slightly. */
          spacingLeft: 12,
          spacingRight: 24,
          /* The categorical axis is vertical (left side) for bar charts, so
             the bottom value-axis labels are short numbers that never need
             rotation. A constant tight margin is correct here. */
          marginBottom: 32
        },
        xAxis: {
          ...o.xAxis,
          categories: z,
          ...b !== void 0 && { title: { ...(n = o.xAxis) == null ? void 0 : n.title, text: b } }
        },
        yAxis: {
          ...o.yAxis,
          ...p !== void 0 && { title: { ...(c = o.yAxis) == null ? void 0 : c.title, text: p } },
          ...x && { labels: { ...(f = o.yAxis) == null ? void 0 : f.labels, format: `{value} ${x}` } },
          ...t && { plotLines: t },
          ...l && { plotBands: l }
        },
        plotOptions: {
          bar: {
            stacking: N ? "normal" : void 0,
            dataLabels: {
              enabled: R,
              ...m && { format: m },
              allowOverlap: !0
            },
            ...h && {
              cursor: "pointer",
              point: {
                events: {
                  click() {
                    h({
                      category: String(this.category ?? ""),
                      seriesName: this.series.name,
                      value: this.y ?? null,
                      pointIndex: this.index,
                      seriesIndex: this.series.index
                    });
                  }
                }
              }
            }
          }
        },
        legend: {
          ...o.legend,
          enabled: !1
        },
        // Hide Highcharts' built-in hamburger; we render our own export menu.
        // Export config: hide the built-in hamburger, force offline-only
        // (no POST to export.highcharts.com), and inline CSS into the
        // export SVG so legend / axis text render.
        exporting: { enabled: !1, fallbackToExportServer: !1, applyStyleSheets: !0 },
        series: r
      };
      return v ? C.merge(a, v) : a;
    }, [o, u, z, N, H, R, m, h, g, b, p, x, i, d, v]), F = o.colors ?? [], I = /* @__PURE__ */ k("div", { ref: w, className: "fds-horizontal-group-bar-chart__viewport", children: [
      /* @__PURE__ */ s("div", { ref: A, className: "fds-horizontal-group-bar-chart__plot", children: /* @__PURE__ */ s(
        X,
        {
          highcharts: C,
          options: P,
          callback: (r) => {
            var t;
            if ((t = r.options.chart) != null && t.forExport) return;
            S.current = r;
            const l = r;
            l.fdsFullscreenViewport = w.current, l.fdsToggleFullscreen = () => {
              var a, n;
              document.fullscreenElement ? document.exitFullscreen() : (n = (a = w.current) == null ? void 0 : a.requestFullscreen) == null || n.call(a);
            }, _ == null || _(r);
          },
          containerProps: { className: "fds-horizontal-group-bar-chart" }
        }
      ) }),
      H && /* @__PURE__ */ s("div", { className: "fds-chart__scrollable-legend", children: u.map((r, l) => {
        const t = G.has(r.name);
        return /* @__PURE__ */ k(
          "button",
          {
            type: "button",
            className: `fds-chart__scrollable-legend-item${t ? " fds-chart__scrollable-legend-item--hidden" : ""}`,
            onClick: () => M(r.name, l),
            "aria-pressed": !t,
            "aria-label": `Toggle ${r.name} series`,
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  className: "fds-chart__scrollable-legend-symbol",
                  style: { backgroundColor: r.color ?? F[l % F.length] }
                }
              ),
              /* @__PURE__ */ s("span", { className: "fds-chart__scrollable-legend-label", children: r.name })
            ]
          },
          r.name
        );
      }) })
    ] });
    return $ ? I : /* @__PURE__ */ s(Q, { ref: q, ...j, children: I });
  }
);
Y.displayName = "HorizontalGroupBarChart";
export {
  Y as HorizontalGroupBarChart
};
