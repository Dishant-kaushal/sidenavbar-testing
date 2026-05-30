import { jsxs as W, jsx as i } from "react/jsx-runtime";
import { forwardRef as Z, useRef as k, useState as L, useEffect as U, useCallback as ee, useMemo as re } from "react";
import z from "highcharts";
import M from "highcharts-react-official";
import { Chart as te } from "../Chart/Chart.js";
import { useFaclonChartTheme as le, readCssVar as T } from "../Chart/highchartsTheme.js";
/* empty css                */
const ne = M.default ?? M, se = Z(
  ({
    series: g,
    categories: o,
    stacked: C = !1,
    showLegend: F = !0,
    showDataLabels: I = !1,
    dataLabelFormat: b,
    onPointClick: p,
    colors: v,
    xAxisTitle: x,
    yAxisTitle: y,
    yAxisUnit: S,
    plotLines: u,
    plotBands: f,
    scrollable: H = !1,
    scrollableMinWidth: V,
    highchartsOptions: _,
    bare: B = !1,
    onChartReady: w,
    ...D
  }, G) => {
    const a = le(), A = k(null), E = k(null), R = k(null), [N, J] = L(() => /* @__PURE__ */ new Set());
    U(() => {
      const r = E.current;
      if (!r || typeof ResizeObserver > "u") return;
      let t = 0, l = !0;
      const n = new ResizeObserver(() => {
        if (l) {
          l = !1;
          return;
        }
        cancelAnimationFrame(t), t = requestAnimationFrame(() => {
          var s;
          return (s = A.current) == null ? void 0 : s.reflow();
        });
      });
      return n.observe(r), () => {
        cancelAnimationFrame(t), n.disconnect();
      };
    }, []);
    const K = ee((r, t) => {
      var m;
      const l = A.current, n = (m = l == null ? void 0 : l.series) == null ? void 0 : m[t];
      if (!n) return;
      const s = !n.visible;
      n.setVisible(s, !0), J((h) => {
        const c = new Set(h);
        return s ? c.delete(r) : c.add(r), c;
      });
    }, []), Q = re(() => {
      var j, q, P;
      const r = g.map((e) => ({
        type: "column",
        name: e.name,
        data: e.data,
        color: e.color,
        // Source-of-truth: the React `hiddenSeries` set. Without this,
        // Highcharts resets each series to `visible: true` on every option
        // rebuild (e.g. drill-down rebuilds the series array), and the DOM
        // legend's dimmed state drifts out of sync with the actual bars.
        visible: !N.has(e.name)
      })), t = o.length === 0 ? 0 : o.reduce((e, d) => e + ((d == null ? void 0 : d.length) ?? 0), 0) / o.length, n = o.length > 8 || o.length > 4 && t > 6 ? 80 : 32, s = f == null ? void 0 : f.map((e) => ({
        from: e.from,
        to: e.to,
        color: e.color ?? "rgba(239,68,68,0.1)",
        zIndex: e.zIndex ?? 0,
        ...e.label && {
          label: {
            text: e.label,
            align: e.labelAlign ?? "right"
          }
        }
      })), m = u == null ? void 0 : u.map((e) => ({
        value: e.value,
        color: (e.color ?? T("--border-error-default")) || "#ef4444",
        width: e.width ?? 2,
        dashStyle: e.dashStyle ?? "Dash",
        zIndex: e.zIndex ?? 5,
        ...e.label && {
          label: {
            text: e.label,
            align: e.labelAlign ?? "right",
            style: { color: (e.color ?? T("--border-error-default")) || "#ef4444" }
          }
        }
      })), h = {
        ...a,
        ...v && { colors: v },
        chart: {
          ...a.chart,
          type: "column",
          /* Tighten the outer canvas padding from the theme defaults (32/32);
             Highcharts auto-extends marginLeft to fit the value-axis labels,
             so this just trims the surrounding gutters. Matches the
             LineChart / AreaChart / HorizontalGroupBarChart passes. */
          spacingLeft: 12,
          spacingRight: 24,
          /* Extra bottom buffer so rotated X-axis labels (and any second
             staggered row) have breathing room before the DOM legend that
             renders directly beneath the Highcharts SVG. */
          spacingBottom: 24,
          marginBottom: n,
          zooming: { type: "x", singleTouch: !0, mouseWheel: !1 },
          ...H && { scrollablePlotArea: { minWidth: V ?? 800, opacity: 1 } }
        },
        xAxis: {
          ...a.xAxis,
          categories: o,
          ...x !== void 0 && { title: { ...(j = a.xAxis) == null ? void 0 : j.title, text: x } }
        },
        yAxis: {
          ...a.yAxis,
          ...y !== void 0 && { title: { ...(q = a.yAxis) == null ? void 0 : q.title, text: y } },
          ...S && { labels: { ...(P = a.yAxis) == null ? void 0 : P.labels, format: `{value} ${S}` } },
          ...m && { plotLines: m },
          ...s && { plotBands: s }
        },
        plotOptions: {
          column: {
            stacking: C ? "normal" : void 0,
            dataLabels: {
              enabled: I,
              ...b && { format: b },
              // Show every label even when they would visually collide;
              // consumers can opt back into Highcharts' overlap-dodging
              // via `highchartsOptions.plotOptions.column.dataLabels`.
              allowOverlap: !0
            },
            ...p && {
              cursor: "pointer",
              point: {
                events: {
                  click() {
                    p({
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
          ...a.legend,
          enabled: !1
        },
        // Export config: hide the built-in hamburger (SDK ships its own
        // menu), force offline-only (no POST to export.highcharts.com),
        // and inline CSS into the export SVG so legend / axis text render.
        exporting: { enabled: !1, fallbackToExportServer: !1, applyStyleSheets: !0 },
        series: r
      };
      if (!_) return h;
      const { series: c, ...X } = _, Y = Array.isArray(c) ? r.map(
        (e, d) => z.merge(e, c[d] ?? {})
      ) : r;
      return z.merge({ ...h, series: Y }, X);
    }, [a, g, o, C, F, I, b, H, V, N, p, v, x, y, S, u, f, _]), O = a.colors ?? [], $ = /* @__PURE__ */ W("div", { ref: R, className: "fds-column-chart__viewport", children: [
      /* @__PURE__ */ i("div", { ref: E, className: "fds-column-chart__plot", children: /* @__PURE__ */ i(
        ne,
        {
          highcharts: z,
          options: Q,
          callback: (r) => {
            var l;
            if ((l = r.options.chart) != null && l.forExport) return;
            A.current = r;
            const t = r;
            t.fdsFullscreenViewport = R.current, t.fdsToggleFullscreen = () => {
              var n, s;
              document.fullscreenElement ? document.exitFullscreen() : (s = (n = R.current) == null ? void 0 : n.requestFullscreen) == null || s.call(n);
            }, w == null || w(r);
          },
          containerProps: { className: "fds-column-chart" },
          updateArgs: [!0, !0, !1]
        }
      ) }),
      F && /* @__PURE__ */ i("div", { className: "fds-chart__scrollable-legend", children: g.map((r, t) => {
        const l = N.has(r.name);
        return /* @__PURE__ */ W(
          "button",
          {
            type: "button",
            className: `fds-chart__scrollable-legend-item${l ? " fds-chart__scrollable-legend-item--hidden" : ""}`,
            onClick: () => K(r.name, t),
            "aria-pressed": !l,
            "aria-label": `Toggle ${r.name} series`,
            children: [
              /* @__PURE__ */ i(
                "span",
                {
                  className: "fds-chart__scrollable-legend-symbol",
                  style: { backgroundColor: r.color ?? O[t % O.length] }
                }
              ),
              /* @__PURE__ */ i("span", { className: "fds-chart__scrollable-legend-label", children: r.name })
            ]
          },
          r.name
        );
      }) })
    ] });
    return B ? $ : /* @__PURE__ */ i(te, { ref: G, ...D, children: $ });
  }
);
se.displayName = "ColumnChart";
export {
  se as ColumnChart
};
