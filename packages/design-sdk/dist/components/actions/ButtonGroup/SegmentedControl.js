import { jsx as i } from "react/jsx-runtime";
import { useRef as b, useCallback as a, useMemo as C } from "react";
import { useControllableState as S } from "../../../hooks/useControllableState.js";
import { ButtonGroup as w } from "./ButtonGroup.js";
import { ButtonGroupSelectionContext as A } from "./ButtonGroupSelectionContext.js";
function k({
  value: f,
  defaultValue: m,
  onChange: d,
  children: p,
  ...g
}) {
  const n = b(null), [r, o] = S({
    value: f,
    defaultValue: m,
    onChange: d
  }), l = a((e) => o(e), [o]), x = C(
    () => ({ selectedValue: r, onItemSelect: l }),
    [r, l]
  ), v = a(
    (e) => {
      var c;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const t = Array.from(
        ((c = n.current) == null ? void 0 : c.querySelectorAll(
          ".fds-btn-group__button:not([disabled])"
        )) ?? []
      );
      if (!t.length) return;
      const y = t.indexOf(document.activeElement), h = e.key === "ArrowRight" ? 1 : -1, u = (y + h + t.length) % t.length;
      t[u].focus();
      const s = t[u].value;
      s && o(s), e.preventDefault();
    },
    [o]
  );
  return /* @__PURE__ */ i(A.Provider, { value: x, children: /* @__PURE__ */ i(w, { ref: n, onKeyDown: v, ...g, children: p }) });
}
k.displayName = "SegmentedControl";
export {
  k as SegmentedControl
};
