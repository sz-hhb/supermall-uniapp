"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-recommend",
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  },
  emits: ["recommend-item-click"],
  setup(__props, { emit: emits }) {
    const recommendItemClick = (link) => {
      emits("recommend-item-click", link);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommends, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => recommendItemClick(item.link), index),
            d: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/home/cpns/home-recommend.vue"]]);
wx.createComponent(Component);
