"use strict";
const common_vendor = require("../../common/vendor.js");
const store_cart = require("../../store/cart.js");
if (!Math) {
  (CartListItem + CartBottomNav)();
}
const CartListItem = () => "./cpns/cart-list-item.js";
const CartBottomNav = () => "./cpns/cart-bottom-nav.js";
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const cartStore = store_cart.useCartStore();
    const { cartList, isCheckAll } = common_vendor.storeToRefs(cartStore);
    const totalPrice = common_vendor.computed(() => {
      return cartStore.getTotalPrice;
    });
    const totalCount = common_vendor.computed(() => {
      return cartStore.getTotalCount;
    });
    const radioChange = (iid) => {
      cartStore.changeGoodCheck(iid);
    };
    const changeRadioStatus = () => {
      cartStore.changeCheckAllRadioStatus();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(cartList), (item, index, i0) => {
          return {
            a: common_vendor.o(radioChange, item.iid),
            b: "40cffb98-0-" + i0,
            c: common_vendor.p({
              ["item-info"]: item
            }),
            d: item.iid
          };
        }),
        b: common_vendor.o(changeRadioStatus),
        c: common_vendor.p({
          ["total-info"]: {
            totalCount: common_vendor.unref(totalCount),
            totalPrice: common_vendor.unref(totalPrice),
            isCheckAll: common_vendor.unref(isCheckAll)
          }
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
