"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "category-item",
  props: {
    itemInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["category-item-click"],
  setup(__props, { emit: emits }) {
    const categoryItemClick = (link) => {
      emits("category-item-click", link);
    };
    return (_ctx, _cache) => {
      return {
        a: __props.itemInfo.image,
        b: common_vendor.t(__props.itemInfo.title),
        c: common_vendor.o(($event) => categoryItemClick(__props.itemInfo.link))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/category/cpns/category-item.vue"]]);
wx.createComponent(Component);
