import { jsx as b } from "react/jsx-runtime";
import { forwardRef as B, useCallback as v } from "react";
import { cn as y } from "../../../utils/cn.js";
import { Button as G } from "../Button/Button.js";
import { useButtonGroupContext as _ } from "./ButtonGroupContext.js";
import { useButtonGroupSelectionContext as g } from "./ButtonGroupSelectionContext.js";
const I = B(
  ({ className: i, value: s, onClick: r, ...m }, u) => {
    const o = _(), t = g(), a = (o == null ? void 0 : o.size) ?? "Medium", d = (o == null ? void 0 : o.variant) ?? "Primary", p = (o == null ? void 0 : o.color) ?? "Primary", l = (o == null ? void 0 : o.isDisabled) ?? !1, e = typeof s == "string" ? s : void 0, n = t !== null && e !== void 0 && t.selectedValue === e, f = v(
      (c) => {
        e !== void 0 && (t == null || t.onItemSelect(e)), r == null || r(c);
      },
      [e, t, r]
    );
    return /* @__PURE__ */ b(
      G,
      {
        ref: u,
        variant: d,
        size: a,
        color: p,
        isDisabled: l,
        value: s,
        onClick: f,
        "aria-pressed": t !== null ? n : void 0,
        className: y(
          "fds-btn-group__button",
          n && "fds-btn-group__button--selected",
          i
        ),
        ...m
      }
    );
  }
);
I.displayName = "ButtonGroupItem";
export {
  I as ButtonGroupItem
};
