import { jsx as A } from "react/jsx-runtime";
import { forwardRef as R, useRef as L, useState as F, useEffect as w, useMemo as B } from "react";
import C from "highcharts";
import M from "highcharts-react-official";
import { Chart as G } from "../Chart/Chart.js";
import { useFaclonChartTheme as z } from "../Chart/highchartsTheme.js";
/* empty css             */
const W = M.default ?? M;
function X(r, e) {
  let t = "";
  return r && e ? t = "{point.y} ({point.percentage:.1f}%)" : r ? t = "{point.percentage:.1f}%" : e && (t = "{point.y}"), t ? `{point.name}: ${t}` : "{point.name}";
}
function k(r, e) {
  let t = "";
  return r && e ? t = "{y} ({percentage:.1f}%)" : r ? t = "{percentage:.1f}%" : e && (t = "{y}"), t ? `{name}: ${t}` : "{name}";
}
const U = {
  bottom: { align: "center", verticalAlign: "bottom", layout: "horizontal" },
  left: { align: "left", verticalAlign: "middle", layout: "vertical" },
  right: { align: "right", verticalAlign: "middle", layout: "vertical" }
};
function $(r) {
  const e = r.legend, t = e == null ? void 0 : e.options;
  if (!t || t.layout !== "horizontal" || t.align !== "center") return;
  const h = e.allItems || [];
  if (h.length < 2) return;
  const f = e.legendWidth;
  if (!f) return;
  const c = /* @__PURE__ */ new Map();
  for (const o of h) {
    const n = o.legendItem;
    !n || typeof n.x != "number" || typeof n.y != "number" || (c.has(n.y) || c.set(n.y, []), c.get(n.y).push({ item: o, li: n }));
  }
  for (const o of c.values()) {
    o.sort((s, u) => s.li.x - u.li.x);
    const n = o[0], g = o[o.length - 1], m = n.li.x, E = g.li.x + (g.item.itemWidth || 0) - m;
    if (E >= f - 2) continue;
    const p = Math.round((f - E) / 2) - m;
    if (p !== 0)
      for (const { li: s } of o) {
        const u = s.x + p;
        s.group.attr({ translateX: u, translateY: s.y }), s.x = u;
      }
  }
}
const j = 18, q = -30, P = -10, Y = 80, J = 120, K = 32, Q = R(
  ({
    data: r,
    showLegend: e = !0,
    legendPosition: t = "bottom",
    showLegendPercentage: h = !1,
    showLegendValue: f = !1,
    showDataLabels: c = !0,
    showDataLabelPercentage: o = !0,
    showDataLabelValue: n = !1,
    labelPosition: g = "outside",
    donut: m = !0,
    innerSize: I = "60%",
    bare: E = !1,
    onChartReady: p,
    ...s
  }, u) => {
    const d = z(), N = L(null), S = L(null), [x, T] = F(360);
    w(() => {
      const i = S.current;
      if (!i || typeof ResizeObserver > "u") return;
      let a = 0;
      const y = () => {
        const l = i.clientHeight;
        l > 0 && T((b) => Math.abs(l - b) > 4 ? l : b);
      }, _ = new ResizeObserver(() => {
        cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          var l;
          y(), (l = N.current) == null || l.reflow();
        });
      });
      return _.observe(i), y(), () => {
        cancelAnimationFrame(a), _.disconnect();
      };
    }, []);
    const D = B(() => {
      const i = X(o, n), a = k(h, f), _ = [
        {
          type: "pie",
          data: r,
          // Always set innerSize explicitly. Omitting it leaves Highcharts'
          // prior value in place when toggling donut → pie at runtime; setting
          // 0 forces the hole closed.
          innerSize: m ? I : 0,
          dataLabels: {
            enabled: c,
            format: i,
            /* Always set distance explicitly so toggling back to outside
               actually restores the outer position (Highcharts retains
               stale options otherwise). */
            distance: g === "center" ? m ? P : q : j
          }
        }
      ], { marginBottom: l, ...b } = d.chart ?? {}, { maxHeight: V, ...v } = d.legend ?? {}, O = t === "bottom" ? Y : Math.max(J, x - K);
      return {
        ...d,
        chart: {
          ...b,
          type: "pie",
          /* Pin the SVG height to the measured canvas-slot height so
             Highcharts can never lay out content past the slot's bottom
             edge. Resize fires update `canvasHeight` and rebuild options,
             so the chart stays in sync with the container at all times. */
          height: x,
          /* Trim horizontal chart spacing (theme defaults to 32/32 — that
             was for axis-chart x-axis labels; PieChart has no axis). With
             8/8 we reclaim ~48 px of horizontal room for the bottom
             legend's per-row item packing. */
          spacingLeft: 8,
          spacingRight: 8,
          events: {
            render() {
              $(this);
            }
          }
        },
        tooltip: { ...d.tooltip },
        plotOptions: {
          pie: {
            /* Pie series default to `showInLegend: false` in Highcharts —
               without this key the legend container renders but with NO
               slice entries inside (a confusing empty box). Always opt the
               slices in; `legend.enabled` below controls whether the
               container itself is visible. */
            showInLegend: !0
            // `size` and `minSize` left unset → Highcharts auto-shrinks
            // the disc to fit the plot rect, reserving room for outside
            // labels too (native pie behavior since v3.0). The theme's
            // `responsive.rules` at maxWidth: 520 forces bottom legend
            // for narrow cards, which sidesteps side-legend cropping.
          }
        },
        legend: {
          ...v,
          enabled: e,
          ...U[t],
          /* Bottom = ~2 rows + pagination row. Side = canvas height minus
             a small spacing reserve, so the legend uses as many items as
             will fit in the column before Highcharts' native ◀ ▶
             pagination engages. `navigation` inherits from the theme
             (enabled, Faclon arrow colors). */
          maxHeight: O,
          /* Leave `legend.width` unset so Highcharts defaults it to
             `chart.plotWidth`. With `align: 'center'` and the default
             width, items pack into rows that are properly centered
             horizontally — `width: '100%'` packed items from the left
             instead, defeating the centering. Side legends stack
             vertically; leaving width unset lets Highcharts auto-size
             the column to the widest item. */
          // No `margin` override — Highcharts' default (12 px) is fine.
          // Set unconditionally — see buildLegendFormat() docstring for why
          // omitting this key fails to clear the legend text on toggle-off.
          labelFormat: a
        },
        // Hide Highcharts' built-in hamburger; we render our own export menu.
        // Export config: hide the built-in hamburger, force offline-only
        // (no POST to export.highcharts.com), and inline CSS into the
        // export SVG so legend text renders.
        exporting: { enabled: !1, fallbackToExportServer: !1, applyStyleSheets: !0 },
        series: _
      };
    }, [
      d,
      r,
      e,
      t,
      h,
      f,
      c,
      o,
      n,
      g,
      m,
      I,
      x
    ]), H = /* @__PURE__ */ A("div", { ref: S, className: "fds-pie-chart", children: /* @__PURE__ */ A(
      W,
      {
        highcharts: C,
        options: D,
        callback: (i) => {
          var a;
          (a = i.options.chart) != null && a.forExport || (N.current = i, p == null || p(i));
        },
        containerProps: { style: { width: "100%", height: "100%" } }
      }
    ) });
    return E ? H : /* @__PURE__ */ A(G, { ref: u, ...s, children: H });
  }
);
Q.displayName = "PieChart";
export {
  Q as PieChart
};
