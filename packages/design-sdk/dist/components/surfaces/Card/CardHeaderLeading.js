import { jsxs as d, jsx as e } from "react/jsx-runtime";
import { cn as n } from "../../../utils/cn.js";
import { useCardContext as c } from "./CardContext.js";
/* empty css                      */
function t({ title: s, subtitle: a, prefix: r, suffix: i }) {
  const { size: l } = c();
  return /* @__PURE__ */ d("div", { className: "fds-card-header-leading", children: [
    r && /* @__PURE__ */ e("div", { className: "fds-card-header-leading__prefix", children: r }),
    /* @__PURE__ */ d("div", { className: "fds-card-header-leading__content", children: [
      /* @__PURE__ */ d("div", { className: "fds-card-header-leading__title-row", children: [
        /* @__PURE__ */ e("span", { className: n("fds-card-header-leading__title", l === "large" ? "BodyLargeSemibold" : "BodyMediumSemibold"), children: s }),
        i && /* @__PURE__ */ e("div", { className: "fds-card-header-leading__suffix", children: i })
      ] }),
      a && /* @__PURE__ */ e("span", { className: "fds-card-header-leading__subtitle BodySmallRegular", children: a })
    ] })
  ] });
}
t.displayName = "CardHeaderLeading";
export {
  t as CardHeaderLeading
};
