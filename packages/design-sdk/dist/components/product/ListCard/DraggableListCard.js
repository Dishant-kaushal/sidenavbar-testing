import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { ListCard as b } from "./ListCard.js";
/* empty css                      */
function v() {
  return /* @__PURE__ */ i("svg", { width: "10", height: "16", viewBox: "0 0 10 16", fill: "currentColor", "aria-hidden": "true", children: [
    /* @__PURE__ */ r("circle", { cx: "3", cy: "3", r: "1.5" }),
    /* @__PURE__ */ r("circle", { cx: "3", cy: "8", r: "1.5" }),
    /* @__PURE__ */ r("circle", { cx: "3", cy: "13", r: "1.5" }),
    /* @__PURE__ */ r("circle", { cx: "7", cy: "3", r: "1.5" }),
    /* @__PURE__ */ r("circle", { cx: "7", cy: "8", r: "1.5" }),
    /* @__PURE__ */ r("circle", { cx: "7", cy: "13", r: "1.5" })
  ] });
}
function x({
  id: u,
  isDraggable: c = !0,
  isDragging: d = !1,
  isDragOver: l = !1,
  isDisabled: e,
  onDragStart: t,
  onDragOver: o,
  onDragLeave: g,
  onDrop: n,
  onDragEnd: s,
  ...f
}) {
  const a = c && !e;
  return /* @__PURE__ */ i(
    "div",
    {
      draggable: a,
      onDragStart: a ? t : void 0,
      onDragOver: a ? o : void 0,
      onDragLeave: a ? g : void 0,
      onDrop: a ? n : void 0,
      onDragEnd: a ? s : void 0,
      className: [
        "fds-draggable-list-card",
        a ? "fds-draggable-list-card--draggable" : "",
        d ? "fds-draggable-list-card--dragging" : "",
        l ? "fds-draggable-list-card--over" : ""
      ].filter(Boolean).join(" "),
      children: [
        a && /* @__PURE__ */ r(
          "button",
          {
            className: "fds-draggable-list-card__handle",
            tabIndex: -1,
            "aria-hidden": "true",
            type: "button",
            children: /* @__PURE__ */ r(v, {})
          }
        ),
        /* @__PURE__ */ r(b, { isDisabled: e, ...f })
      ]
    }
  );
}
x.displayName = "DraggableListCard";
export {
  x as DraggableListCard
};
