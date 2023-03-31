"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-base-info",
  props: {
    baseInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.baseInfo.goodInfo.title),
        b: common_vendor.t(__props.baseInfo.goodInfo.price),
        c: common_vendor.t(__props.baseInfo.goodInfo.oldPrice),
        d: __props.baseInfo.goodInfo.discountDesc
      }, __props.baseInfo.goodInfo.discountDesc ? {
        e: common_vendor.t(__props.baseInfo.goodInfo.discountDesc)
      } : {}, {
        f: common_vendor.f(__props.baseInfo.columnsList, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/cpns/detail-base-info.vue"]]);
wx.createComponent(Component);
