"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_cart = require("../../../store/cart.js");
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_goods_nav2 + _easycom_uni_section2)();
}
const _easycom_uni_goods_nav = () => "../../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_goods_nav + _easycom_uni_section)();
}
const _sfc_main = {
  __name: "detail-good-nav",
  emits: ["add-to-cart"],
  setup(__props, { emit: emits }) {
    const cartStore = store_cart.useCartStore();
    const options = common_vendor.reactive([{
      icon: "shop",
      text: "店铺"
    }, {
      icon: "cart",
      text: "购物车",
      info: cartStore.getCartListLength
    }]);
    const onClick = (e) => {
      common_vendor.index.showToast({
        title: `点击${e.content.text}`,
        icon: "none"
      });
    };
    const buttonClick = (e) => {
      if (e.index == 0) {
        common_vendor.index.showToast({
          title: "加入购物车"
        });
        emits("add-to-cart");
        options[1].info = cartStore.getCartListLength;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClick),
        b: common_vendor.o(buttonClick),
        c: common_vendor.p({
          options
        }),
        d: common_vendor.p({
          title: ""
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/cpns/detail-good-nav.vue"]]);
wx.createComponent(Component);
