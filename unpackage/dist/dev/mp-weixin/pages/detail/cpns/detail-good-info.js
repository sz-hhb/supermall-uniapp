"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-good-info",
  props: {
    goodDetailInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return common_vendor.e({
        a: common_vendor.t(__props.goodDetailInfo.desc),
        b: (_b = (_a = __props.goodDetailInfo) == null ? void 0 : _a.detailImage) == null ? void 0 : _b.length
      }, ((_d = (_c = __props.goodDetailInfo) == null ? void 0 : _c.detailImage) == null ? void 0 : _d.length) ? {
        c: common_vendor.t(__props.goodDetailInfo.detailImage[0].key)
      } : {}, {
        d: (_f = (_e = __props.goodDetailInfo) == null ? void 0 : _e.detailImage) == null ? void 0 : _f.length
      }, ((_h = (_g = __props.goodDetailInfo) == null ? void 0 : _g.detailImage) == null ? void 0 : _h.length) ? {
        e: common_vendor.f(__props.goodDetailInfo.detailImage[0].list, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/cpns/detail-good-info.vue"]]);
wx.createComponent(Component);
