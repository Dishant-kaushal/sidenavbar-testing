import { jsxs as m, jsx as t, Fragment as w } from "react/jsx-runtime";
/* empty css                    */
import { useState as p, useRef as u, useLayoutEffect as C } from "react";
import { createPortal as O } from "react-dom";
import { MoreHorizontal as k } from "react-feather";
import { IconButton as d } from "../../actions/IconButton/IconButton.js";
import { DropdownMenu as I } from "../../overlays/DropdownMenu/DropdownMenu.js";
import { ActionListItem as R } from "../../overlays/DropdownMenu/ActionListItem.js";
import { ActionListItemGroup as v } from "../../overlays/DropdownMenu/ActionListItemGroup.js";
import { useClickOutside as E } from "../../../hooks/useClickOutside.js";
import { useDismissOnScrollOutside as M } from "../../../hooks/useDismissOnScrollOutside.js";
const b = 4, g = 200, N = 180;
function F({
  actions: n,
  moreAriaLabel: D = "More actions",
  menuMinWidth: l = N
}) {
  const [i, r] = p(!1), s = u(null), c = u(null), [a, _] = p(null);
  E(c, (o) => {
    var e;
    i && !((e = s.current) != null && e.contains(o.target)) && r(!1);
  }), C(() => {
    if (!i || !s.current) return;
    const o = s.current.getBoundingClientRect(), e = o.bottom + g > window.innerHeight;
    _({
      top: e ? o.top - b - g : o.bottom + b,
      // Anchor the menu's RIGHT edge to the trigger's right edge.
      left: o.right - l
    });
  }, [i, l]), M(c, () => r(!1), i);
  const f = n.length > 3, P = f ? n.slice(0, 2) : n, h = f ? n.slice(2) : [];
  return /* @__PURE__ */ m(
    "div",
    {
      className: "fds-table__row-actions",
      onClick: (o) => o.stopPropagation(),
      children: [
        P.map((o) => /* @__PURE__ */ t(
          d,
          {
            icon: o.icon,
            "aria-label": o.label,
            isDisabled: o.isDisabled,
            onClick: (e) => {
              e.stopPropagation(), !o.isDisabled && o.onClick(e);
            }
          },
          o.id
        )),
        f && /* @__PURE__ */ m(w, { children: [
          /* @__PURE__ */ t(
            d,
            {
              ref: s,
              icon: /* @__PURE__ */ t(k, { size: 20 }),
              "aria-label": D,
              "aria-haspopup": "menu",
              "aria-expanded": i,
              onClick: (o) => {
                o.stopPropagation(), r((e) => !e);
              }
            }
          ),
          i && a && typeof document < "u" && O(
            /* @__PURE__ */ t(
              "div",
              {
                ref: c,
                className: "fds-table__row-actions-menu",
                role: "presentation",
                style: {
                  top: a.top,
                  left: a.left,
                  minWidth: l
                },
                children: /* @__PURE__ */ t(I, { children: /* @__PURE__ */ t(v, { children: h.map((o) => /* @__PURE__ */ t(
                  R,
                  {
                    title: o.label,
                    leadingIcon: o.icon,
                    isDestructive: o.isDestructive,
                    isDisabled: o.isDisabled,
                    onClick: (e) => {
                      o.isDisabled || (o.onClick(e), r(!1));
                    }
                  },
                  o.id
                )) }) })
              }
            ),
            document.body
          )
        ] })
      ]
    }
  );
}
export {
  F as TableRowActions
};
