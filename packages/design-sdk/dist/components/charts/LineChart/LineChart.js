import { jsxs as N, jsx as o } from "react/jsx-runtime";
import { forwardRef as ee, useRef as I, useState as re, useEffect as te, useCallback as le, useMemo as ne } from "react";
import O from "highcharts";
import G from "highcharts-react-official";
import { Chart as se } from "../Chart/Chart.js";
import { useFaclonChartTheme as ie, readCssVar as J } from "../Chart/highchartsTheme.js";
/* empty css              */
const ae = G.default ?? G, oe = ee(
  ({
    series: b,
    categories: a,
    smooth: C = !1,
    showMarkers: x,
    showLegend: H = !0,
    showDataLabels: p = !1,
    dataLabelFormat: d,
    onPointClick: v,
    colors: y,
    xAxisTitle: S,
    yAxisTitle: _,
    yAxisUnit: w,
    plotLines: u,
    plotBands: h,
    scrollable: V = !1,
    scrollableMinWidth: E,
    highchartsOptions: k,
    bare: K = !1,
    onChartReady: A,
    ...Q
  }, X) => {
    const s = ie(), R = I(null), F = I(null), z = I(null), [Y, Z] = re(() => /* @__PURE__ */ new Set());
    te(() => {
      const r = F.current;
      if (!r || typeof ResizeObserver > "u") return;
      let t = 0, n = !0;
      const l = new ResizeObserver(() => {
        if (n) {
          n = !1;
          return;
        }
        cancelAnimationFrame(t), t = requestAnimationFrame(() => {
          var i;
          return (i = R.current) == null ? void 0 : i.reflow();
        });
      });
      return l.observe(r), () => {
        cancelAnimationFrame(t), l.disconnect();
      };
    }, []);
    const D = le((r, t) => {
      var f;
      const n = R.current, l = (f = n == null ? void 0 : n.series) == null ? void 0 : f[t];
      if (!l) return;
      const i = !l.visible;
      l.setVisible(i, !0), Z((g) => {
        const c = new Set(g);
        return i ? c.delete(r) : c.add(r), c;
      });
    }, []), L = ne(() => {
      var P, T, B;
      const r = C ? "spline" : "line", t = b.map((e) => ({
        type: r,
        name: e.name,
        data: e.data,
        color: e.color,
        ...e.dashStyle && { dashStyle: e.dashStyle },
        // Force the same marker symbol on every series; Highcharts otherwise
        // cycles through [circle, diamond, square, …] per series index.
        ...x !== void 0 && { marker: { enabled: x, symbol: "circle" } }
      })), n = a.length === 0 ? 0 : a.reduce((e, m) => e + ((m == null ? void 0 : m.length) ?? 0), 0) / a.length, i = a.length > 8 || a.length > 4 && n > 6 ? 80 : 32, f = h == null ? void 0 : h.map((e) => ({
        from: e.from,
        to: e.to,
        color: e.color ?? "rgba(239,68,68,0.1)",
        zIndex: e.zIndex ?? 0,
        ...e.label && {
          label: { text: e.label, align: e.labelAlign ?? "right" }
        }
      })), g = u == null ? void 0 : u.map((e) => ({
        value: e.value,
        color: (e.color ?? J("--border-error-default")) || "#ef4444",
        width: e.width ?? 2,
        dashStyle: e.dashStyle ?? "Dash",
        zIndex: e.zIndex ?? 5,
        ...e.label && {
          label: {
            text: e.label,
            align: e.labelAlign ?? "right",
            style: { color: (e.color ?? J("--border-error-default")) || "#ef4444" }
          }
        }
      })), c = v ? {
        cursor: "pointer",
        point: {
          events: {
            click() {
              v({
                category: String(this.category ?? ""),
                seriesName: this.series.name,
                value: this.y ?? null,
                pointIndex: this.index,
                seriesIndex: this.series.index
              });
            }
          }
        }
      } : {}, j = {
        ...s,
        ...y && { colors: y },
        chart: {
          ...s.chart,
          type: r,
          /* Tighten the outer canvas padding from the theme defaults (32/32);
             Highcharts auto-extends marginLeft to fit the value-axis labels,
             so this just trims the surrounding gutters. Matches the
             AreaChart / HorizontalGroupBarChart passes. */
          spacingLeft: 12,
          spacingRight: 24,
          marginBottom: i,
          zooming: { type: "x", singleTouch: !0, mouseWheel: !1 },
          ...V && { scrollablePlotArea: { minWidth: E ?? 800, opacity: 1 } }
        },
        xAxis: {
          ...s.xAxis,
          categories: a,
          ...S !== void 0 && { title: { ...(P = s.xAxis) == null ? void 0 : P.title, text: S } }
        },
        yAxis: {
          ...s.yAxis,
          ..._ !== void 0 && { title: { ...(T = s.yAxis) == null ? void 0 : T.title, text: _ } },
          ...w && { labels: { ...(B = s.yAxis) == null ? void 0 : B.labels, format: `{value} ${w}` } },
          ...g && { plotLines: g },
          ...f && { plotBands: f }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: p,
              ...d && { format: d },
              allowOverlap: !0
            },
            ...c
          },
          spline: {
            dataLabels: {
              enabled: p,
              ...d && { format: d },
              allowOverlap: !0
            },
            ...c
          }
        },
        legend: {
          ...s.legend,
          enabled: !1
        },
        // Hide Highcharts' built-in hamburger; we render our own export menu.
        // Export config: hide the built-in hamburger, force offline-only
        // (no POST to export.highcharts.com), and inline CSS into the
        // export SVG so legend / axis text render.
        exporting: { enabled: !1, fallbackToExportServer: !1, applyStyleSheets: !0 },
        series: t
      };
      if (!k) return j;
      const { series: q, ...M } = k, U = Array.isArray(q) ? t.map(
        (e, m) => O.merge(e, q[m] ?? {})
      ) : t;
      return O.merge({ ...j, series: U }, M);
    }, [s, b, a, C, x, H, p, d, V, E, v, y, S, _, w, u, h, k]), W = s.colors ?? [], $ = /* @__PURE__ */ N("div", { ref: z, className: "fds-line-chart__viewport", children: [
      /* @__PURE__ */ o("div", { ref: F, className: "fds-line-chart__plot", children: /* @__PURE__ */ o(
        ae,
        {
          highcharts: O,
          options: L,
          callback: (r) => {
            var n;
            if ((n = r.options.chart) != null && n.forExport) return;
            R.current = r;
            const t = r;
            t.fdsFullscreenViewport = z.current, t.fdsToggleFullscreen = () => {
              var l, i;
              document.fullscreenElement ? document.exitFullscreen() : (i = (l = z.current) == null ? void 0 : l.requestFullscreen) == null || i.call(l);
            }, A == null || A(r);
          },
          containerProps: { className: "fds-line-chart" }
        }
      ) }),
      H && /* @__PURE__ */ o("div", { className: "fds-chart__scrollable-legend", children: b.map((r, t) => {
        const n = r.color ?? W[t % W.length], l = Y.has(r.name);
        return /* @__PURE__ */ N(
          "button",
          {
            type: "button",
            className: `fds-chart__scrollable-legend-item${l ? " fds-chart__scrollable-legend-item--hidden" : ""}`,
            onClick: () => D(r.name, t),
            "aria-pressed": !l,
            "aria-label": `Toggle ${r.name} series`,
            children: [
              /* @__PURE__ */ N("svg", { width: "16", height: "12", viewBox: "0 0 16 12", "aria-hidden": "true", style: { flexShrink: 0 }, children: [
                /* @__PURE__ */ o("line", { x1: "0", y1: "6", x2: "16", y2: "6", stroke: n, strokeWidth: "2" }),
                /* @__PURE__ */ o("circle", { cx: "8", cy: "6", r: "3", fill: n })
              ] }),
              /* @__PURE__ */ o("span", { className: "fds-chart__scrollable-legend-label", children: r.name })
            ]
          },
          r.name
        );
      }) })
    ] });
    return K ? $ : /* @__PURE__ */ o(se, { ref: X, ...Q, children: $ });
  }
);
oe.displayName = "LineChart";
export {
  oe as LineChart
};
