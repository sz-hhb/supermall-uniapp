"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "grid-view-item",
  props: {
    goodsInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["goods-item-click"],
  setup(__props, { emit: emits }) {
    const goodsItemClick = (id) => {
      emits("goods-item-click", id);
    };
    return (_ctx, _cache) => {
      return {
        a: __props.goodsInfo.show.img,
        b: common_vendor.t(__props.goodsInfo.title),
        c: common_vendor.t(__props.goodsInfo.price),
        d: common_assets._imports_0,
        e: common_vendor.t(__props.goodsInfo.cfav),
        f: common_vendor.o(($event) => goodsItemClick(__props.goodsInfo.iid))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/components/grid-view-item/grid-view-item.vue"]]);
wx.createComponent(Component);
