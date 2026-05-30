import { jsxs as e, jsx as r } from "react/jsx-runtime";
/* empty css                      */
function o({ title: a, subtitle: d }) {
  return !a && !d ? null : /* @__PURE__ */ e("div", { className: "fds-card-footer-leading", children: [
    a && /* @__PURE__ */ r("span", { className: "fds-card-footer-leading__title BodyMediumSemibold", children: a }),
    d && /* @__PURE__ */ r("span", { className: "fds-card-footer-leading__subtitle BodySmallRegular", children: d })
  ] });
}
o.displayName = "CardFooterLeading";
export {
  o as CardFooterLeading
};
