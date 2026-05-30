import { jsxs as S, jsx as e } from "react/jsx-runtime";
import { cn as r } from "../../../utils/cn.js";
import { LinkButton as g } from "../../actions/LinkButton/LinkButton.js";
import { IconButton as x } from "../../actions/IconButton/IconButton.js";
/* empty css                   */
const y = {
  Small: "BodySmallMedium",
  Medium: "BodyMediumMedium",
  Large: "BodyLargeMedium"
}, h = {
  Small: "Small",
  Medium: "Medium",
  Large: "Medium"
}, T = {
  Small: "Small",
  Medium: "Medium",
  Large: "Large"
};
function j({
  type: m = "Text",
  currentItem: c,
  isCurrentPage: o,
  showSeparator: u = !0,
  size: a = "Medium",
  value: n,
  children: b,
  icon: t,
  href: p,
  target: _,
  rel: f,
  onClick: i,
  "aria-label": M,
  accessibilityLabel: N,
  className: B,
  ...I
}) {
  const l = y[a], L = c ?? o ?? !1, s = M ?? N, d = b ?? n;
  return /* @__PURE__ */ S("li", { className: r("fds-breadcrumb-item", B), ...I, children: [
    L ? /* @__PURE__ */ e("span", { className: r("fds-breadcrumb-item__current", l), "aria-current": "page", children: m === "Icon" ? t : d }) : m === "Icon" ? /* @__PURE__ */ e(
      x,
      {
        icon: t,
        size: h[a],
        className: "fds-breadcrumb-item__action",
        onClick: i,
        "aria-label": s
      }
    ) : /* @__PURE__ */ e(
      g,
      {
        type: "Action",
        color: "Neutral",
        size: T[a],
        label: d,
        href: p,
        target: _,
        rel: f,
        onClick: i,
        className: "fds-breadcrumb-item__action",
        "aria-label": s
      }
    ),
    u && /* @__PURE__ */ e("span", { className: r("fds-breadcrumb-item__separator", l), "aria-hidden": "true", children: "/" })
  ] });
}
j.displayName = "BreadcrumbItem";
export {
  j as BreadcrumbItem
};
