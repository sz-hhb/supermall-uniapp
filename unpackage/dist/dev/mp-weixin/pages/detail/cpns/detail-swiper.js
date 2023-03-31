"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-swiper",
  props: {
    bannerList: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.bannerList, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/cpns/detail-swiper.vue"]]);
wx.createComponent(Component);
