import { jsx as c } from "react/jsx-runtime";
import { forwardRef as A, useRef as f, useEffect as T, useMemo as w } from "react";
import C from "highcharts/esm/highcharts.js";
import "highcharts/esm/highcharts-more.js";
import "highcharts/esm/modules/solid-gauge.js";
import "highcharts/esm/modules/exporting.js";
import "highcharts/esm/modules/export-data.js";
import h from "highcharts-react-official";
import { Chart as S } from "../Chart/Chart.js";
import { useFaclonChartTheme as _, FACLON_CHART_PALETTE_TOKENS as g } from "../Chart/highchartsTheme.js";
/* empty css                  */
const E = h.default ?? h;
function H(r, i) {
  return typeof window > "u" ? i : getComputedStyle(document.documentElement).getPropertyValue(r).trim() || i;
}
const N = 100, y = 24, v = 1, F = y + v, u = (r) => N - r * F, b = (r) => u(r) - y, G = A(
  ({
    activities: r,
    showLegend: i = !0,
    highchartsOptions: p,
    onChartReady: l,
    ...x
  }, R) => {
    const a = _(), d = f(null), m = f(null);
    T(() => {
      const n = m.current;
      if (!n || typeof ResizeObserver > "u") return;
      let o = 0, t = !0;
      const e = new ResizeObserver(() => {
        if (t) {
          t = !1;
          return;
        }
        cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          var s;
          return (s = d.current) == null ? void 0 : s.reflow();
        });
      });
      return e.observe(n), () => {
        cancelAnimationFrame(o), e.disconnect();
      };
    }, []);
    const k = w(() => {
      if (!r || r.length === 0)
        return { ...a, chart: { type: "solidgauge" } };
      const n = r.map((t, e) => {
        const s = g[e % g.length];
        return H(s, "#e9690c");
      }), o = n.map(
        (t) => `color-mix(in srgb, ${t} 30%, transparent)`
      );
      return {
        ...a,
        chart: {
          ...a.chart,
          type: "solidgauge"
        },
        tooltip: {
          borderWidth: 0,
          backgroundColor: "none",
          shadow: !1,
          style: { fontSize: "12px" },
          valueSuffix: "%",
          pointFormat: '{series.name}<br><span style="font-size:1.6em; color: {point.color}; font-weight: bold">{point.y}</span>',
          positioner: function(t, e) {
            const s = this;
            return {
              x: (s.chart.chartWidth - t) / 2,
              y: s.chart.plotTop + (s.chart.plotHeight - e) / 2
            };
          }
        },
        pane: {
          startAngle: 0,
          endAngle: 360,
          background: r.map((t, e) => ({
            outerRadius: `${u(e)}%`,
            innerRadius: `${b(e)}%`,
            backgroundColor: o[e],
            borderWidth: 0
          }))
        },
        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
        },
        plotOptions: {
          solidgauge: {
            dataLabels: { enabled: !1 },
            linecap: "round",
            stickyTracking: !1,
            rounded: !0,
            events: {
              // Highcharts' default legend click on solidgauge is a no-op —
              // explicitly toggle the series visibility so behaviour matches
              // axis charts (Column/Bar/Line/Area).
              legendItemClick: function() {
                return this.setVisible(!this.visible), !1;
              }
            }
          }
        },
        legend: {
          ...a.legend,
          enabled: i,
          // solidgauge doesn't paint its default legend symbol — render a
          // colored swatch via HTML so the marker matches the ring color
          // (parity with the axis-chart legend look).
          useHTML: !0,
          symbolWidth: 0,
          symbolHeight: 0,
          symbolPadding: 0,
          labelFormatter: function() {
            const t = this;
            return `<span style="display:inline-flex;align-items:center;gap:6px;"><span aria-hidden="true" style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${n[t.index ?? 0] ?? "transparent"};"></span>${t.name ?? ""}</span>`;
          }
        },
        // Hide Highcharts' built-in hamburger; we render our own export menu.
        // Export config: hide the built-in hamburger, force offline-only
        // (no POST to export.highcharts.com), and inline CSS into the
        // export SVG so labels render.
        exporting: { enabled: !1, fallbackToExportServer: !1, applyStyleSheets: !0 },
        series: r.map((t, e) => ({
          type: "solidgauge",
          name: t.name,
          color: n[e],
          showInLegend: !0,
          data: [
            {
              color: n[e],
              radius: `${u(e)}%`,
              innerRadius: `${b(e)}%`,
              y: Math.min(
                100,
                Math.max(0, t.value / (t.max ?? 100) * 100)
              )
            }
          ]
        })),
        ...p
      };
    }, [r, a, i, p]);
    return /* @__PURE__ */ c(S, { ref: R, ...x, children: /* @__PURE__ */ c("div", { ref: m, className: "fds-activity-gauge", children: /* @__PURE__ */ c(
      E,
      {
        highcharts: C,
        options: k,
        callback: (n) => {
          var o;
          (o = n.options.chart) != null && o.forExport || (d.current = n, l == null || l(n));
        },
        containerProps: { style: { width: "100%", height: "100%" } }
      }
    ) }) });
  }
);
G.displayName = "ActivityGauge";
export {
  G as ActivityGauge
};
