import { jsx as p } from "react/jsx-runtime";
/* empty css                */
import { forwardRef as l, useMemo as s } from "react";
import { cn as c } from "../../../utils/cn.js";
import { ButtonGroupContext as x } from "./ButtonGroupContext.js";
const g = l(
  ({
    size: o = "Medium",
    variant: t = "Primary",
    color: e = "Primary",
    isFullWidth: r = !1,
    isDisabled: m = !1,
    accessibilityLabel: u,
    className: a,
    children: f,
    ...n
  }, d) => {
    const i = s(
      () => ({ size: o, variant: t, color: e, isFullWidth: r, isDisabled: m }),
      [o, t, e, r, m]
    );
    return /* @__PURE__ */ p(
      "div",
      {
        ref: d,
        role: "group",
        "aria-label": u,
        className: c(
          "fds-btn-group",
          r && "fds-btn-group--full-width",
          a
        ),
        ...n,
        children: /* @__PURE__ */ p(x.Provider, { value: i, children: f })
      }
    );
  }
);
g.displayName = "ButtonGroup";
export {
  g as ButtonGroup
};
