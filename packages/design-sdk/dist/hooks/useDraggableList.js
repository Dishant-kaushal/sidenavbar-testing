import { useState as u, useRef as x } from "react";
function O(d) {
  const [i, f] = u(d), [g, s] = u(null), [D, r] = u(null), o = x(null);
  function m(e) {
    return {
      isDragging: g === e,
      isDragOver: D === e && g !== e,
      onDragStart(t) {
        o.current = e, s(e), t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData("text/plain", e);
      },
      onDragOver(t) {
        t.preventDefault(), t.dataTransfer.dropEffect = "move", r(e);
      },
      // Only clear overId when the cursor has truly left the element boundary,
      // not just moved over a child element (which fires a spurious DragLeave).
      onDragLeave(t) {
        const n = t.currentTarget.getBoundingClientRect();
        (t.clientX < n.left || t.clientX > n.right || t.clientY < n.top || t.clientY > n.bottom) && r(null);
      },
      onDrop(t) {
        t.preventDefault();
        const n = o.current;
        n && n !== e && f((l) => {
          const I = l.findIndex((c) => c.id === n), p = l.findIndex((c) => c.id === e), a = [...l], [v] = a.splice(I, 1);
          return a.splice(p, 0, v), a;
        }), o.current = null, s(null), r(null);
      },
      // Fires when drag ends for any reason — including Escape or drop outside.
      onDragEnd(t) {
        o.current = null, s(null), r(null);
      }
    };
  }
  return { items: i, setItems: f, getItemProps: m };
}
export {
  O as useDraggableList
};
