"use strict";
const common_vendor = require("../common/vendor.js");
const service_detail = require("../service/detail.js");
const useDetailStore = common_vendor.defineStore("detail", {
  state: () => {
    return {
      topImages: [],
      goodInfo: {},
      columnsList: [],
      shopInfo: {},
      goodDetailInfo: {},
      goodParamInfo: [],
      goodParamRule: [],
      goodRateList: []
    };
  },
  actions: {
    async fetchDetailPageData(iid) {
      const res = await service_detail.getDetailPageData(iid);
      this.topImages = res.result.itemInfo.topImages;
      this.goodInfo = res.result.itemInfo;
      this.columnsList = res.result.columns;
      this.shopInfo = res.result.shopInfo;
      this.goodDetailInfo = res.result.detailInfo;
      this.goodParamInfo = res.result.itemParams.info.set;
      this.goodParamRule = res.result.itemParams.rule.tables[0];
      this.goodRateList = res.result.rate.list;
    }
  }
});
exports.useDetailStore = useDetailStore;
