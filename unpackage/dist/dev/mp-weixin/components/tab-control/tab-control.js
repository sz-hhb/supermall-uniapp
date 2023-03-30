"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  emits: ["tab-item-click"],
  setup(__props, { emit: emits }) {
    const currentIndex = common_vendor.ref(0);
    const tabClick = (index) => {
      currentIndex.value = index;
      emits("tab-item-click", index);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titles, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index === currentIndex.value ? 1 : "",
            c: common_vendor.o(($event) => tabClick(index), index),
            d: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);
