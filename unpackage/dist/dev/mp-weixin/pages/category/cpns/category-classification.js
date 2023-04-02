"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "category-classification",
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menu-item-click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const initMaitKey = common_vendor.computed(() => {
      var _a;
      return (_a = props.menuList[0]) == null ? void 0 : _a.maitKey;
    });
    const initminiWallKey = common_vendor.computed(() => {
      var _a;
      return (_a = props.menuList[0]) == null ? void 0 : _a.miniWallkey;
    });
    const currentItemIndex = common_vendor.ref(0);
    common_vendor.watch(() => [initMaitKey.value, initminiWallKey.value], ([newMaitKey, newMiniWllKey]) => {
      emits("menu-item-click", newMaitKey, newMiniWllKey);
    });
    const menuItemClick = (index, maitKey, miniWallkey) => {
      currentItemIndex.value = index;
      emits("menu-item-click", maitKey, miniWallkey);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.menuList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index === currentItemIndex.value ? 1 : "",
            c: common_vendor.o(($event) => menuItemClick(index, item.maitKey, item.miniWallkey), item.maitKey),
            d: item.maitKey
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/category/cpns/category-classification.vue"]]);
wx.createComponent(Component);
