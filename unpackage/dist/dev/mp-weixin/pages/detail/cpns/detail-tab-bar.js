"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "detail-tab-bar",
  emits: ["detail-tab-bar-click"],
  setup(__props, { emit: emits }) {
    const tabBarList = common_vendor.reactive([
      { id: 0, title: "商品" },
      { id: 1, title: "参数" },
      { id: 2, title: "评论" },
      { id: 3, title: "推荐" }
    ]);
    const currentIndex = common_vendor.ref(0);
    const tabBarClick = (index) => {
      currentIndex.value = index;
      emits("detail-tab-bar-click", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabBarList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index === currentIndex.value ? 1 : "",
            c: common_vendor.o(($event) => tabBarClick(index), item.id),
            d: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/cpns/detail-tab-bar.vue"]]);
wx.createComponent(Component);
