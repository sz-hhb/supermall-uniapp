"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "user-list-view",
  props: {
    listItem: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.listItem, (item, index, i0) => {
          return {
            a: item.icon,
            b: item.iconColor ? 1 : "",
            c: common_vendor.t(item.info),
            d: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/profile/cpns/user-list-view.vue"]]);
wx.createComponent(Component);
