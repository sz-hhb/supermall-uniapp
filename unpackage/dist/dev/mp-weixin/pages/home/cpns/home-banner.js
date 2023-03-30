"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  emits: ["bannerClick"],
  setup(__props, { emit: emits }) {
    const handleBannerClick = (link) => {
      emits("bannerClick", link);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handleBannerClick(item.link), index),
            c: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/home/cpns/home-banner.vue"]]);
wx.createComponent(Component);
