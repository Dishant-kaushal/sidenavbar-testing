import { useMemo as s, useState as c, useEffect as d } from "react";
function u() {
  const [n, e] = c(0);
  return d(() => {
    if (typeof window > "u") return;
    const t = new MutationObserver(() => {
      e((o) => o + 1);
    });
    return t.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["data-theme", "class"]
    }), () => t.disconnect();
  }, []), n;
}
const g = [
  "--background-warning-default",
  // 1. orange
  "--background-info-default",
  // 2. blue
  "--background-positive-default",
  // 3. green
  "--background-error-default",
  // 4. red
  "--background-warning-default-hover",
  // 5. dark orange
  "--background-info-default-hover",
  // 6. dark blue
  "--background-positive-default-hover",
  // 7. dark green
  "--background-brand-default"
  // 8. brand (charcoal — neutral, last)
];
function a(n) {
  return typeof window > "u" ? "" : getComputedStyle(document.documentElement).getPropertyValue(n).trim();
}
function b() {
  const n = u();
  return s(() => {
    const e = "'Noto Sans Variable', 'Noto Sans', sans-serif", t = a("--text-gray-primary") || "#192839", o = a("--text-gray-secondary") || "#40566d", l = a("--background-surface-intense") || "#ffffff", r = a("--border-gray-subtle") || "#cbd5e2";
    return {
      colors: g.map((i) => a(i)).filter((i) => i.length > 0),
      chart: {
        backgroundColor: l,
        style: { fontFamily: e },
        spacingLeft: 32,
        spacingRight: 32,
        marginBottom: 60
      },
      title: { text: void 0 },
      subtitle: { text: void 0 },
      credits: { enabled: !1 },
      /* Only color + fontFamily are themed; Highcharts' built-in em-based
         font-size scale (axis labels / titles / legend / tooltip ≈ 0.8em,
         dataLabels ≈ 0.7em, title ≈ 1.2em, all relative to chart.style.fontSize)
         is left untouched. If a consumer needs to globally rescale chart
         typography, set `chart.style.fontSize` and everything scales together. */
      xAxis: {
        labels: {
          style: { color: t, fontFamily: e, textOverflow: "none", whiteSpace: "nowrap" },
          overflow: "allow",
          useHTML: !0
        },
        lineColor: r,
        tickColor: r,
        title: { style: { color: o, fontFamily: e } },
        minPadding: 0.02,
        maxPadding: 0.02
      },
      yAxis: {
        labels: { style: { color: t, fontFamily: e } },
        gridLineColor: r,
        lineColor: r,
        tickColor: r,
        title: { style: { color: o, fontFamily: e } }
      },
      legend: {
        itemStyle: { color: o, fontFamily: e },
        itemHoverStyle: { color: t },
        symbolWidth: 12,
        symbolHeight: 12,
        symbolRadius: 6,
        symbolPadding: 6,
        itemMarginTop: 4,
        itemMarginBottom: 4,
        /* Cap the legend box so high-cardinality datasets activate
           Highcharts' built-in pagination instead of silently clipping
           items past the cutoff. Per-chart wrappers can override
           `maxHeight` (PieChart exposes it as `legendMaxHeight`). */
        maxHeight: 96,
        navigation: {
          activeColor: t,
          inactiveColor: o,
          style: { fontFamily: e, color: o }
        }
      },
      /* Theme-level data-label styling so labels follow Faclon typography
         instead of Highcharts' default "auto-contrast colour + 1 px white
         textOutline" combo. Per-chart wrappers can override `enabled` and
         `format` without losing the styling. */
      plotOptions: {
        series: {
          dataLabels: {
            style: {
              color: t,
              fontFamily: e,
              fontWeight: "500",
              textOutline: "none"
            }
          }
        }
      },
      /* Adaptive layout — when the chart container is narrower than 520 px
         (typical for dashboard cards and mobile), force the legend onto a
         horizontal row at the bottom regardless of the consumer's
         `legendPosition` prop. A side-anchored legend on a narrow card
         eats so much horizontal width that the plot area (the pie disc /
         the column bars) ends up cramped or visually clipped. The rule
         is only width-based — taller cards keep their original layout. */
      responsive: {
        rules: [
          {
            condition: { maxWidth: 520 },
            chartOptions: {
              legend: {
                align: "center",
                verticalAlign: "bottom",
                layout: "horizontal"
              }
            }
          }
        ]
      }
    };
  }, [n]);
}
export {
  g as FACLON_CHART_PALETTE_TOKENS,
  a as readCssVar,
  b as useFaclonChartTheme
};
