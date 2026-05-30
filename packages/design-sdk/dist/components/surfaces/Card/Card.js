import { jsx as s } from "react/jsx-runtime";
import { cn as x } from "../../../utils/cn.js";
import { CardContext as N } from "./CardContext.js";
/* empty css         */
function $({
  elevation: d = "None",
  isHoverable: o = !1,
  isHoverScaled: c = !1,
  isSelected: l = !1,
  validationState: a = "none",
  size: n = "large",
  padding: r = "spacing.7",
  children: f,
  className: i,
  accessibilityLabel: t,
  href: e,
  target: m,
  rel: p,
  as: v,
  ...C
}) {
  const g = x(
    "fds-card",
    `fds-card--elevation-${d.toLowerCase()}`,
    o && "fds-card--hoverable",
    c && "fds-card--hover-scaled",
    l && "fds-card--selected",
    a !== "none" && `fds-card--validation-${a}`,
    r !== "spacing.7" && `fds-card--padding-${r.replace(".", "-")}`,
    i
  ), u = e ? "a" : v ?? "div";
  return /* @__PURE__ */ s(N.Provider, { value: { size: n }, children: /* @__PURE__ */ s(
    u,
    {
      className: g,
      "aria-label": t,
      href: e,
      target: m,
      rel: p,
      ...C,
      children: f
    }
  ) });
}
$.displayName = "Card";
export {
  $ as Card
};
