"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const types = ["pop", "new", "sell"];
function getGoodslistData() {
  let goodsListOrigin = {};
  types.forEach((item) => {
    goodsListOrigin[item] = { page: 0, list: [] };
  });
  return goodsListOrigin;
}
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      banners: [],
      recommends: [],
      goodsList: getGoodslistData()
    };
  },
  getters: {},
  actions: {
    async fetchHomeMultiData() {
      const res = await service_home.getHomeMultiData();
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    },
    async fetchHomeData(type, page) {
      const res = await service_home.getHomeData(type, page);
      this.goodsList[type].list.push(...res.data.list);
      this.goodsList[type].page = page;
    }
  }
});
exports.types = types;
exports.useHomeStore = useHomeStore;
