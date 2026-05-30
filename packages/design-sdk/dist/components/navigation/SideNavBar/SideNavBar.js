import { jsx as e } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import { cn as l } from "../../../utils/cn.js";
import { Drawer as b } from "../../overlays/Drawer/Drawer.js";
import { DrawerBody as w } from "../../overlays/Drawer/DrawerBody.js";
import { useSideNavBar as B } from "./useSideNavBar.js";
/* empty css               */
const M = u(function({
  side: i = "left",
  collapsible: o = "icon",
  children: r,
  className: s,
  ...t
}, d) {
  const { state: v, theme: a, variant: m, isMobile: f, openMobile: c, setOpenMobile: p, hovered: N, setHovered: n } = B();
  return f ? /* @__PURE__ */ e(
    b,
    {
      isOpen: c,
      onDismiss: () => p(!1),
      accessibilityLabel: "Navigation",
      children: /* @__PURE__ */ e(w, { children: /* @__PURE__ */ e(
        "aside",
        {
          ref: d,
          className: l("fds-sidenav fds-sidenav--mobile", s),
          role: "navigation",
          "data-side": i,
          "data-collapsible": o,
          "data-state": "expanded",
          "data-theme": a == null ? void 0 : a.toLowerCase(),
          ...t,
          children: /* @__PURE__ */ e("div", { className: "fds-sidenav__inner", children: r })
        }
      ) })
    }
  ) : /* @__PURE__ */ e(
    "aside",
    {
      ref: d,
      className: l("fds-sidenav", s),
      role: "navigation",
      "data-side": i,
      "data-collapsible": o,
      "data-state": v,
      "data-theme": a == null ? void 0 : a.toLowerCase(),
      "data-variant": m,
      "data-hovered": N ? "true" : void 0,
      ...t,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: "fds-sidenav__inner",
          onMouseEnter: () => n(!0),
          onMouseLeave: () => n(!1),
          children: r
        }
      )
    }
  );
});
M.displayName = "SideNavBar";
export {
  M as SideNavBar
};
