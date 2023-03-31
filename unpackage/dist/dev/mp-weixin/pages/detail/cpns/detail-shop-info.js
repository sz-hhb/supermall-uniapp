"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_format = require("../../../utils/format.js");
const _sfc_main = {
  __name: "detail-shop-info",
  props: {
    shopInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.shopInfo.shopLogo,
        b: common_vendor.t(__props.shopInfo.name),
        c: common_vendor.t(common_vendor.unref(utils_format.myriabitFormat)(__props.shopInfo.cSells) + "万"),
        d: common_vendor.t(__props.shopInfo.cGoods),
        e: common_vendor.f(__props.shopInfo.score, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.score),
            c: common_vendor.n(item.isBetter ? "better" : "bad"),
            d: common_vendor.t(item.isBetter ? "高" : "低"),
            e: item.isBetter ? 1 : "",
            f: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/cpns/detail-shop-info.vue"]]);
wx.createComponent(Component);
