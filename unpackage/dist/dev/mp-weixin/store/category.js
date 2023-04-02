"use strict";
const common_vendor = require("../common/vendor.js");
const service_category = require("../service/category.js");
const types = ["pop", "new", "sell"];
function getGoodslistData() {
  let goodsListOrigin = {};
  types.forEach((item) => {
    goodsListOrigin[item] = { list: [] };
  });
  return goodsListOrigin;
}
const useCategoryStore = common_vendor.defineStore("category", {
  state: () => {
    return {
      categoryMenuList: [],
      subCategoryList: [],
      subCategoryRecommendList: getGoodslistData()
    };
  },
  actions: {
    async fetchCategoryMenuData() {
      const res = await service_category.getCategoryData();
      this.categoryMenuList = res.data.category.list;
    },
    async fetchSubCategotyData(payload) {
      const res = await service_category.getSubCategoryData(payload);
      this.subCategoryList = res.data.list;
    },
    async fetchSubCategoryDetailData(type, payload) {
      const res = await service_category.getSubCategoryDetailData(payload);
      this.subCategoryRecommendList[type].list.push(...res);
    }
  }
});
exports.types = types;
exports.useCategoryStore = useCategoryStore;
