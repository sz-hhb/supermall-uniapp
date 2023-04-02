"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "cart-list-item",
  props: {
    itemInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["radio-change"],
  setup(__props, { emit: emits }) {
    const radioChange = (itemInfo) => {
      emits("radio-change", itemInfo.iid);
    };
    return (_ctx, _cache) => {
      return {
        a: __props.itemInfo.isCheck,
        b: common_vendor.o(($event) => radioChange(__props.itemInfo)),
        c: __props.itemInfo.imgUrl,
        d: common_vendor.t(__props.itemInfo.title),
        e: common_vendor.t(__props.itemInfo.desc),
        f: common_vendor.t(__props.itemInfo.price),
        g: common_vendor.t(__props.itemInfo.count),
        h: common_vendor.o(($event) => radioChange(__props.itemInfo))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/cart/cpns/cart-list-item.vue"]]);
wx.createComponent(Component);
