"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_td2 + _easycom_uni_tr2 + _easycom_uni_table2)();
}
const _easycom_uni_td = () => "../../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_tr = () => "../../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_table = () => "../../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_td + _easycom_uni_tr + _easycom_uni_table)();
}
const _sfc_main = {
  __name: "detail-good-param",
  props: {
    goodParams: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.goodParams.goodParamRule, (item, index, i0) => {
          return {
            a: common_vendor.f(item, (childItem, childIndex, i1) => {
              return {
                a: common_vendor.t(childItem),
                b: childIndex,
                c: "a871f0c2-2-" + i0 + "-" + i1 + "," + ("a871f0c2-1-" + i0)
              };
            }),
            b: index,
            c: "a871f0c2-1-" + i0 + ",a871f0c2-0"
          };
        }),
        b: common_vendor.p({
          emptyText: "暂无更多数据"
        }),
        c: common_vendor.f(__props.goodParams.goodParamInfo, (item, index, i0) => {
          return {
            a: common_vendor.t(item.key),
            b: "a871f0c2-5-" + i0 + "," + ("a871f0c2-4-" + i0),
            c: common_vendor.t(item.value),
            d: "a871f0c2-6-" + i0 + "," + ("a871f0c2-4-" + i0),
            e: index,
            f: "a871f0c2-4-" + i0 + ",a871f0c2-3"
          };
        }),
        d: common_vendor.p({
          emptyText: "暂无更多数据"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/cpns/detail-good-param.vue"]]);
wx.createComponent(Component);
