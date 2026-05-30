import { jsxs as s, jsx as a } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { ChevronDown as x, Clock as D } from "react-feather";
import { cn as R } from "../../../utils/cn.js";
import { ChartActions as S } from "./ChartActions.js";
/* empty css          */
const j = g(
  ({
    title: r,
    onTitleClick: l,
    breadcrumb: c,
    description: C,
    duration: d,
    actions: u,
    onInfoClick: i,
    onSettingsClick: t,
    onMoreClick: n,
    showInfo: o,
    showSettings: h,
    showMore: m,
    filters: _,
    children: v,
    className: N,
    ...b
  }, H) => {
    const y = typeof r == "string", f = r != null || c != null, p = f || d != null, e = u ?? (o !== void 0 || h !== void 0 || m !== void 0 || i !== void 0 || t !== void 0 || n !== void 0 ? /* @__PURE__ */ a(
      S,
      {
        showInfo: o,
        showSettings: h,
        showMore: m,
        onInfoClick: i,
        onSettingsClick: t,
        onMoreClick: n
      }
    ) : null), A = p || e != null;
    return /* @__PURE__ */ s("div", { ref: H, className: R("fds-chart", N), ...b, children: [
      A && /* @__PURE__ */ s("div", { className: "fds-chart__header", children: [
        p && /* @__PURE__ */ s("div", { className: "fds-chart__header-main", children: [
          f && /* @__PURE__ */ s("div", { className: "fds-chart__header-row", children: [
            y ? (
              /* Render as a <button> only when the title is actually
                 interactive (has a dropdown chevron or a click
                 handler). Otherwise render as a plain <span> so it
                 doesn't pick up the hover/focus/cursor affordances
                 that imply interactivity to the user. */
              l ? /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: "fds-chart__title",
                  onClick: l,
                  children: [
                    /* @__PURE__ */ a("span", { className: "fds-chart__title-label HeadingSmallSemibold", children: r }),
                    /* @__PURE__ */ a(
                      x,
                      {
                        className: "fds-chart__title-icon",
                        "aria-hidden": "true"
                      }
                    )
                  ]
                }
              ) : /* @__PURE__ */ a("span", { className: "fds-chart__title", children: /* @__PURE__ */ a("span", { className: "fds-chart__title-label HeadingSmallSemibold", children: r }) })
            ) : r,
            c
          ] }),
          d != null && /* @__PURE__ */ s("div", { className: "fds-chart__duration", children: [
            /* @__PURE__ */ a(D, { className: "fds-chart__duration-icon", "aria-hidden": "true" }),
            /* @__PURE__ */ a("span", { className: "fds-chart__duration-label BodyMediumRegular", children: d })
          ] })
        ] }),
        e != null && /* @__PURE__ */ a("div", { className: "fds-chart__actions", children: e })
      ] }),
      _ != null && /* @__PURE__ */ a("div", { className: "fds-chart__filters", children: _ }),
      /* @__PURE__ */ a("div", { className: "fds-chart__canvas", children: v })
    ] });
  }
);
j.displayName = "Chart";
export {
  j as Chart
};
