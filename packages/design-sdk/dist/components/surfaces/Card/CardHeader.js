import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { cn as c } from "../../../utils/cn.js";
/* empty css               */
function m({ showDivider: e = !0, children: a, className: d, ...s }) {
  return /* @__PURE__ */ i("div", { className: c("fds-card-header", d), ...s, children: [
    /* @__PURE__ */ r("div", { className: "fds-card-header__container", children: a }),
    e && /* @__PURE__ */ r("hr", { className: "fds-card-header__divider" })
  ] });
}
m.displayName = "CardHeader";
export {
  m as CardHeader
};
