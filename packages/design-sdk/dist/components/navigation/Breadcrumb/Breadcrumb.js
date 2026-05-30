import { jsx as o } from "react/jsx-runtime";
import { Children as s, isValidElement as a, cloneElement as l } from "react";
import { cn as d } from "../../../utils/cn.js";
import { BreadcrumbItem as u } from "./BreadcrumbItem.js";
/* empty css               */
function c({ size: m = "Medium", children: n, className: i, ...p }) {
  const t = s.toArray(n);
  if (process.env.NODE_ENV !== "production") {
    const e = t.filter(
      (r) => !a(r) || r.type !== u
    );
    e.length && console.error(
      "[Breadcrumb] Only `<BreadcrumbItem>` children are supported. Invalid:",
      e.map(
        (r) => a(r) ? typeof r.type == "string" ? r.type : r.type.displayName ?? "unknown" : typeof r
      )
    );
  }
  return /* @__PURE__ */ o("nav", { className: d("fds-breadcrumb", i), "aria-label": "Breadcrumb", ...p, children: /* @__PURE__ */ o("ol", { className: "fds-breadcrumb__list", children: t.map((e, r) => a(e) ? l(e, {
    size: m,
    showSeparator: e.props.showSeparator ?? r < t.length - 1
  }) : e) }) });
}
c.displayName = "Breadcrumb";
export {
  c as Breadcrumb
};
