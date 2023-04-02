"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "cart-bottom-nav",
  props: {
    totalInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["change-radio-status"],
  setup(__props, { emit: emits }) {
    const changeRadioStatus = () => {
      emits("change-radio-status");
    };
    return (_ctx, _cache) => {
      return {
        a: __props.totalInfo.isCheckAll,
        b: common_vendor.o(changeRadioStatus),
        c: common_vendor.t(__props.totalInfo.totalPrice),
        d: common_vendor.t(`去计算(${__props.totalInfo.totalCount})`)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/cart/cpns/cart-bottom-nav.vue"]]);
wx.createComponent(Component);
