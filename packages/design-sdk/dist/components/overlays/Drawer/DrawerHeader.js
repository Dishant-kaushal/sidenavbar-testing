import { jsxs as d, jsx as e, Fragment as L } from "react/jsx-runtime";
import { isValidElement as g } from "react";
import { ArrowLeft as b, X as C } from "react-feather";
import { cn as t } from "../../../utils/cn.js";
import { IconButton as h } from "../../actions/IconButton/IconButton.js";
import { Divider as z } from "../../layout/Divider/Divider.js";
import { useDrawerContext as A } from "./DrawerContext.js";
/* empty css                 */
function D(r) {
  var a;
  return g(r) ? ((a = r.type) == null ? void 0 : a.displayName) === "Avatar" : !1;
}
function x({
  title: r,
  subtitle: s,
  leading: a,
  titleSuffix: i,
  trailing: c,
  showDivider: _ = !0,
  className: m,
  children: n,
  ...f
}) {
  const { close: o, closeAll: w, closeButtonRef: v, stackingLevel: N, isExiting: p } = A(), l = N >= 2 || p, u = l && /* @__PURE__ */ e("div", { className: "fds-drawer-header__slot fds-drawer-header__back", children: /* @__PURE__ */ e(
    h,
    {
      icon: /* @__PURE__ */ e(b, { size: 20 }),
      size: "Large",
      onClick: o,
      accessibilityLabel: "Back"
    }
  ) }), k = /* @__PURE__ */ e("div", { className: "fds-drawer-header__slot", children: /* @__PURE__ */ e(
    h,
    {
      ref: (B) => {
        v.current = B;
      },
      icon: /* @__PURE__ */ e(C, { size: 20 }),
      size: "Large",
      onClick: l ? w : o,
      accessibilityLabel: "Close drawer"
    }
  ) }), y = !!n && !r && !s && !a && !i && !c;
  return /* @__PURE__ */ d("div", { className: t("fds-drawer-header", m), ...f, children: [
    /* @__PURE__ */ d("div", { className: "fds-drawer-header__inner", children: [
      /* @__PURE__ */ d("div", { className: "fds-drawer-header__row", children: [
        u,
        y ? (
          /* Empty flex-grow placeholder so back stays left and close stays
             right — the actual children render in the block below. */
          /* @__PURE__ */ e("div", { className: "fds-drawer-header__content", "aria-hidden": "true" })
        ) : /* @__PURE__ */ d(L, { children: [
          a && /* @__PURE__ */ e(
            "div",
            {
              className: t(
                "fds-drawer-header__slot",
                "fds-drawer-header__leading",
                D(a) && "fds-drawer-header__leading--avatar"
              ),
              children: a
            }
          ),
          /* @__PURE__ */ d("div", { className: "fds-drawer-header__content", children: [
            (r || i) && /* @__PURE__ */ d("div", { className: "fds-drawer-header__heading", children: [
              r && /* @__PURE__ */ e("span", { className: "BodyLargeSemibold fds-drawer-header__title", children: r }),
              i && /* @__PURE__ */ e("span", { className: "fds-drawer-header__slot fds-drawer-header__title-suffix", children: i })
            ] }),
            s && /* @__PURE__ */ e("span", { className: "BodySmallRegular fds-drawer-header__subtitle", children: s })
          ] }),
          c && /* @__PURE__ */ e("div", { className: "fds-drawer-header__slot fds-drawer-header__trailing", children: c })
        ] }),
        k
      ] }),
      n && /* @__PURE__ */ e("div", { className: "fds-drawer-header__children", children: n })
    ] }),
    _ && /* @__PURE__ */ e(z, { thickness: "Thin" })
  ] });
}
x.displayName = "DrawerHeader";
export {
  x as DrawerHeader
};
