"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_format = require("../../../utils/format.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "detail-good-comment",
  props: {
    goodRateList: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "forward",
          size: "20"
        }),
        b: common_vendor.f(__props.goodRateList, (item, index, i0) => {
          return {
            a: item.user.avatar,
            b: common_vendor.t(item.user.uname),
            c: common_vendor.t(item.content),
            d: common_vendor.t(common_vendor.unref(utils_format.timeFormat)(item.created)),
            e: common_vendor.t(item.style),
            f: item.rateId
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/cpns/detail-good-comment.vue"]]);
wx.createComponent(Component);
