import { jsxs as x, Fragment as z, jsx as o } from "react/jsx-runtime";
import { Info as y, Settings as B, Menu as T } from "react-feather";
import { IconButton as t } from "../../actions/IconButton/IconButton.js";
import { Tooltip as e } from "../../overlays/Tooltip/Tooltip.js";
function b({
  onInfoClick: n,
  onSettingsClick: r,
  onMoreClick: i,
  showInfo: s,
  showSettings: a,
  showMore: d,
  infoLabel: l = "Info",
  settingsLabel: c = "Settings",
  moreLabel: m = "More",
  trailing: p
}) {
  const u = s ?? n != null, f = a ?? r != null, h = d ?? i != null;
  return /* @__PURE__ */ x(z, { children: [
    u && /* @__PURE__ */ o(e, { placement: "Bottom", bodyText: l, children: /* @__PURE__ */ o(
      t,
      {
        size: "16",
        icon: /* @__PURE__ */ o(y, { size: 16 }),
        "aria-label": l,
        onClick: n
      }
    ) }),
    f && /* @__PURE__ */ o(e, { placement: "Bottom", bodyText: c, children: /* @__PURE__ */ o(
      t,
      {
        size: "16",
        icon: /* @__PURE__ */ o(B, { size: 16 }),
        "aria-label": c,
        onClick: r
      }
    ) }),
    h && /* @__PURE__ */ o(e, { placement: "Bottom", bodyText: m, children: /* @__PURE__ */ o(
      t,
      {
        size: "16",
        icon: /* @__PURE__ */ o(T, { size: 16 }),
        "aria-label": m,
        onClick: i
      }
    ) }),
    p
  ] });
}
b.displayName = "ChartActions";
export {
  b as ChartActions
};
