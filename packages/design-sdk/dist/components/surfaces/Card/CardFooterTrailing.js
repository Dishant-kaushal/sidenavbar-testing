import { jsxs as d, jsx as i } from "react/jsx-runtime";
import { Button as e } from "../../actions/Button/Button.js";
/* empty css                       */
function y({ actions: r }) {
  return !(r != null && r.primary) && !(r != null && r.secondary) ? null : /* @__PURE__ */ d("div", { className: "fds-card-footer-trailing", children: [
    r.secondary && /* @__PURE__ */ i(
      e,
      {
        variant: "Secondary",
        color: "Primary",
        size: "Medium",
        type: r.secondary.type ?? "button",
        "aria-label": r.secondary.accessibilityLabel,
        leadingIcon: r.secondary.iconPosition !== "right" ? r.secondary.icon : void 0,
        trailingIcon: r.secondary.iconPosition === "right" ? r.secondary.icon : void 0,
        isDisabled: r.secondary.isDisabled,
        isLoading: r.secondary.isLoading,
        onClick: r.secondary.onClick,
        children: r.secondary.text
      }
    ),
    r.primary && /* @__PURE__ */ i(
      e,
      {
        variant: "Primary",
        color: "Primary",
        size: "Medium",
        type: r.primary.type ?? "button",
        "aria-label": r.primary.accessibilityLabel,
        leadingIcon: r.primary.iconPosition !== "right" ? r.primary.icon : void 0,
        trailingIcon: r.primary.iconPosition === "right" ? r.primary.icon : void 0,
        isDisabled: r.primary.isDisabled,
        isLoading: r.primary.isLoading,
        onClick: r.primary.onClick,
        children: r.primary.text
      }
    )
  ] });
}
y.displayName = "CardFooterTrailing";
export {
  y as CardFooterTrailing
};
