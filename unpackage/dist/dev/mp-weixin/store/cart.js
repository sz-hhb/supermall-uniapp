"use strict";
const common_vendor = require("../common/vendor.js");
const useCartStore = common_vendor.defineStore("cart", {
  state: () => {
    return {
      cartList: []
    };
  },
  getters: {
    getCartListLength: (state) => {
      return state.cartList.length;
    }
  },
  actions: {
    filterCartList(payload) {
      const goodInfo = this.cartList.find((item) => item.iid === payload.iid);
      if (goodInfo) {
        goodInfo.count += 1;
      } else {
        payload.count = 1;
        payload.isCheck = true;
        this.cartList.push(payload);
      }
    },
    addToCart(payload) {
      if (!this.getCartListLength) {
        payload.count = 1;
        payload.isCheck = true;
        this.cartList.push(payload);
      } else {
        this.filterCartList(payload);
      }
    }
  }
});
exports.useCartStore = useCartStore;
