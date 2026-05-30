import e from "highcharts";
import n from "highcharts/modules/exporting";
import f from "highcharts/modules/export-data";
let r = !1;
function d() {
  if (r || typeof window > "u") return;
  const t = (o) => {
    const i = o.default ?? o;
    typeof i == "function" && i(e);
  };
  t(n), t(f), r = !0;
}
export {
  d as ensureHighchartsExport
};
