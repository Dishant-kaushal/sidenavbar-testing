import { useMemo as u, useState as c, useEffect as d } from "react";
const l = [
  "--background-warning-default",
  "--background-info-default",
  "--background-positive-default",
  "--background-error-default",
  "--background-warning-default-hover",
  "--background-info-default-hover",
  "--background-positive-default-hover",
  "--background-brand-default"
];
function o(t) {
  return typeof window > "u" ? "" : getComputedStyle(document.documentElement).getPropertyValue(t).trim();
}
function f() {
  const [t, e] = c(0);
  return d(() => {
    if (typeof window > "u") return;
    const r = new MutationObserver(() => {
      e((n) => n + 1);
    });
    return r.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["data-theme", "class"]
    }), () => r.disconnect();
  }, []), t;
}
function m() {
  const t = f();
  return u(() => {
    const e = "'Noto Sans Variable', 'Noto Sans', sans-serif", r = o("--text-gray-primary") || "#192839", n = o("--text-gray-secondary") || "#40566d", i = o("--background-surface-intense") || "#ffffff", s = o("--border-gray-subtle") || "#cbd5e2";
    return {
      colors: l.map((a) => o(a)).filter((a) => a.length > 0),
      chart: {
        fontFamily: e,
        foreColor: r,
        background: i
      },
      /* Only color + fontFamily are themed; ApexCharts' built-in font sizes
         for radial dataLabels (name/value) and legend are left at their
         defaults. Per-gauge wrappers can still override sizes when their
         visual identity demands it (e.g. StrokedCircularGauge). */
      plotOptions: {
        radialBar: {
          track: { background: s },
          dataLabels: {
            name: { color: n, fontFamily: e },
            value: { color: r, fontFamily: e }
          }
        }
      },
      legend: {
        fontFamily: e,
        labels: { colors: n },
        markers: { size: 6, shape: "circle", strokeWidth: 0 },
        itemMargin: { horizontal: 8, vertical: 4 }
      },
      /* Light tooltip theme so the card chrome (background / border / shadow)
         matches the Highcharts axis-chart default — every chart in the family
         shows the same white tooltip card. Per-chart `tooltip.custom` HTML
         still renders inside this themed card. */
      tooltip: { theme: "light" },
      /* Adaptive layout — when the chart container is narrower than 520 px
         (typical for dashboard cards and mobile), force the legend onto a
         horizontal row at the bottom regardless of the consumer's
         `legendPosition` prop. A side legend on a narrow card eats so
         much horizontal width that the gauge ends up cramped. */
      responsive: [
        {
          breakpoint: 520,
          options: {
            legend: { position: "bottom" }
          }
        }
      ]
    };
  }, [t]);
}
export {
  l as FACLON_APEX_PALETTE_TOKENS,
  m as useFaclonApexTheme
};
