import { jsxs as K, jsx as d } from "react/jsx-runtime";
import { forwardRef as ce, useRef as C, useState as de, useEffect as me, useCallback as fe, useMemo as ue } from "react";
import f from "highcharts";
import M from "highcharts-react-official";
import { Chart as ge } from "../Chart/Chart.js";
import { useFaclonChartTheme as he, readCssVar as Q } from "../Chart/highchartsTheme.js";
/* empty css              */
const xe = M.default ?? M, be = ce(
  ({
    series: p,
    categories: o,
    stacked: I = !1,
    percentStacked: H = !1,
    smooth: V = !1,
    showMarkers: y,
    showLegend: E = !0,
    showDataLabels: v = !1,
    dataLabelFormat: m,
    onPointClick: A,
    colors: S,
    xAxisTitle: _,
    yAxisTitle: w,
    yAxisUnit: R,
    plotLines: u,
    plotBands: g,
    scrollable: F = !1,
    scrollableMinWidth: $,
    highchartsOptions: k,
    bare: Z = !1,
    onChartReady: N,
    ...B
  }, D) => {
    const n = he(), O = C(null), j = C(null), z = C(null), [U, L] = de(() => /* @__PURE__ */ new Set());
    me(() => {
      const r = j.current;
      if (!r || typeof ResizeObserver > "u") return;
      let l = 0, t = !0;
      const s = new ResizeObserver(() => {
        if (t) {
          t = !1;
          return;
        }
        cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          var i;
          return (i = O.current) == null ? void 0 : i.reflow();
        });
      });
      return s.observe(r), () => {
        cancelAnimationFrame(l), s.disconnect();
      };
    }, []);
    const ee = fe((r, l) => {
      var h;
      const t = O.current, s = (h = t == null ? void 0 : t.series) == null ? void 0 : h[l];
      if (!s) return;
      const i = !s.visible;
      s.setVisible(i, !0), L((x) => {
        const c = new Set(x);
        return i ? c.delete(r) : c.add(r), c;
      });
    }, []), re = ue(() => {
      var Y, G, J;
      const r = V ? "areaspline" : "area", l = H ? "percent" : I ? "normal" : void 0, t = p.map((e) => ({
        type: r,
        name: e.name,
        data: e.data,
        color: e.color,
        ...e.dashStyle && { dashStyle: e.dashStyle },
        // Force the same marker symbol on every series; Highcharts otherwise
        // cycles through [circle, diamond, square, …] per series index.
        ...y !== void 0 && { marker: { enabled: y, symbol: "circle" } }
      })), s = o.length === 0 ? 0 : o.reduce((e, a) => e + ((a == null ? void 0 : a.length) ?? 0), 0) / o.length, h = o.length > 8 || o.length > 4 && s > 6 ? 80 : 32, x = g == null ? void 0 : g.map((e) => ({
        from: e.from,
        to: e.to,
        color: e.color ?? "rgba(239,68,68,0.1)",
        zIndex: e.zIndex ?? 0,
        ...e.label && {
          label: { text: e.label, align: e.labelAlign ?? "right" }
        }
      })), c = u == null ? void 0 : u.map((e) => ({
        value: e.value,
        color: (e.color ?? Q("--border-error-default")) || "#ef4444",
        width: e.width ?? 2,
        dashStyle: e.dashStyle ?? "Dash",
        zIndex: e.zIndex ?? 5,
        ...e.label && {
          label: {
            text: e.label,
            align: e.labelAlign ?? "right",
            style: { color: (e.color ?? Q("--border-error-default")) || "#ef4444" }
          }
        }
      })), T = A ? {
        cursor: "pointer",
        point: {
          events: {
            click() {
              A({
                category: String(this.category ?? ""),
                seriesName: this.series.name,
                value: this.y ?? null,
                pointIndex: this.index,
                seriesIndex: this.series.index
              });
            }
          }
        }
      } : {}, b = {
        ...n,
        ...S && { colors: S },
        chart: {
          ...n.chart,
          type: r,
          /* Tighten the outer canvas padding from the theme defaults (32/32);
             Highcharts auto-extends marginLeft to fit the value-axis labels,
             so this just trims the surrounding gutters. Matches the
             HorizontalGroupBarChart pass. */
          spacingLeft: 12,
          spacingRight: 24,
          marginBottom: h,
          zooming: { type: "x", singleTouch: !0, mouseWheel: !1 },
          ...F && { scrollablePlotArea: { minWidth: $ ?? 800, opacity: 1 } }
        },
        xAxis: {
          ...n.xAxis,
          categories: o,
          ..._ !== void 0 && { title: { ...(Y = n.xAxis) == null ? void 0 : Y.title, text: _ } }
        },
        yAxis: {
          ...n.yAxis,
          ...w !== void 0 && { title: { ...(G = n.yAxis) == null ? void 0 : G.title, text: w } },
          ...R && { labels: { ...(J = n.yAxis) == null ? void 0 : J.labels, format: `{value} ${R}` } },
          ...c && { plotLines: c },
          ...x && { plotBands: x }
        },
        plotOptions: {
          area: {
            stacking: l,
            dataLabels: {
              enabled: v,
              ...m && { format: m },
              allowOverlap: !0
            },
            ...T
          },
          areaspline: {
            stacking: l,
            dataLabels: {
              enabled: v,
              ...m && { format: m },
              allowOverlap: !0
            },
            ...T
          }
        },
        legend: {
          ...n.legend,
          enabled: !1
        },
        // Hide Highcharts' built-in hamburger; we render our own export menu.
        // Export config: hide the built-in hamburger, force offline-only
        // (no POST to export.highcharts.com), and inline CSS into the
        // export SVG so legend / axis text render.
        exporting: { enabled: !1, fallbackToExportServer: !1, applyStyleSheets: !0 },
        series: t
      };
      if (!k) return b;
      const { series: W, yAxis: te, xAxis: le, ...se } = k, ne = Array.isArray(W) ? t.map(
        (e, a) => f.merge(e, W[a] ?? {})
      ) : t, X = (e, a) => a === void 0 ? e : Array.isArray(a) ? a.map((oe) => f.merge(e, oe)) : f.merge(e, a), ae = X(b.yAxis, te), ie = X(b.xAxis, le);
      return f.merge(
        { ...b, series: ne, yAxis: ae, xAxis: ie },
        se
      );
    }, [n, p, o, I, H, V, y, E, v, m, F, $, A, S, _, w, R, u, g, k]), q = n.colors ?? [], P = /* @__PURE__ */ K("div", { ref: z, className: "fds-area-chart__viewport", children: [
      /* @__PURE__ */ d("div", { ref: j, className: "fds-area-chart__plot", children: /* @__PURE__ */ d(
        xe,
        {
          highcharts: f,
          options: re,
          callback: (r) => {
            var t;
            if ((t = r.options.chart) != null && t.forExport) return;
            O.current = r;
            const l = r;
            l.fdsFullscreenViewport = z.current, l.fdsToggleFullscreen = () => {
              var s, i;
              document.fullscreenElement ? document.exitFullscreen() : (i = (s = z.current) == null ? void 0 : s.requestFullscreen) == null || i.call(s);
            }, N == null || N(r);
          },
          containerProps: { className: "fds-area-chart" }
        }
      ) }),
      E && /* @__PURE__ */ d("div", { className: "fds-chart__scrollable-legend", children: p.map((r, l) => {
        const t = U.has(r.name);
        return /* @__PURE__ */ K(
          "button",
          {
            type: "button",
            className: `fds-chart__scrollable-legend-item${t ? " fds-chart__scrollable-legend-item--hidden" : ""}`,
            onClick: () => ee(r.name, l),
            "aria-pressed": !t,
            "aria-label": `Toggle ${r.name} series`,
            children: [
              /* @__PURE__ */ d(
                "span",
                {
                  className: "fds-chart__scrollable-legend-symbol",
                  style: { backgroundColor: r.color ?? q[l % q.length] }
                }
              ),
              /* @__PURE__ */ d("span", { className: "fds-chart__scrollable-legend-label", children: r.name })
            ]
          },
          r.name
        );
      }) })
    ] });
    return Z ? P : /* @__PURE__ */ d(ge, { ref: D, ...B, children: P });
  }
);
be.displayName = "AreaChart";
export {
  be as AreaChart
};
