import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { cn as c } from "../../../utils/cn.js";
/* empty css               */
function f({
  showDivider: o = !0,
  layout: e = "Desktop",
  children: a,
  className: d,
  ...s
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: c("fds-card-footer", `fds-card-footer--${e.toLowerCase()}`, d),
      ...s,
      children: [
        o && /* @__PURE__ */ r("hr", { className: "fds-card-footer__divider" }),
        /* @__PURE__ */ r("div", { className: "fds-card-footer__container", children: a })
      ]
    }
  );
}
f.displayName = "CardFooter";
export {
  f as CardFooter
};
