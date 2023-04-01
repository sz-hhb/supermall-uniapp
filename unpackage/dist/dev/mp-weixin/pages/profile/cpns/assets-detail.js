"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "assets-detail",
  props: {
    assetsInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.assetsInfo, (item, index, i0) => {
          return {
            a: common_vendor.t(item.balance),
            b: common_vendor.t(item.utils),
            c: common_vendor.t(item.label),
            d: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/profile/cpns/assets-detail.vue"]]);
wx.createComponent(Component);
