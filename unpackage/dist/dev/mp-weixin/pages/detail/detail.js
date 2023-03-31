"use strict";
const common_vendor = require("../../common/vendor.js");
const store_detail = require("../../store/detail.js");
require("../../service/detail.js");
require("../../service/index.js");
if (!Math) {
  (DetailTabBar + DetailSwiper + DetailBaseInfo + DetailShopInfo + DetailGoodInfo)();
}
const DetailTabBar = () => "./cpns/detail-tab-bar.js";
const DetailSwiper = () => "./cpns/detail-swiper.js";
const DetailBaseInfo = () => "./cpns/detail-base-info.js";
const DetailShopInfo = () => "./cpns/detail-shop-info.js";
const DetailGoodInfo = () => "./cpns/detail-good-info.js";
const _sfc_main = {
  __name: "detail",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const detailStore = store_detail.useDetailStore();
    const { topImages, goodInfo, columnsList, shopInfo, goodDetailInfo } = common_vendor.storeToRefs(detailStore);
    common_vendor.onLoad(() => {
      detailStore.fetchDetailPageData(props.id);
    });
    const detailTabBarClick = (index) => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(detailTabBarClick),
        b: common_vendor.p({
          ["banner-list"]: common_vendor.unref(topImages)
        }),
        c: common_vendor.p({
          ["base-info"]: {
            goodInfo: common_vendor.unref(goodInfo),
            columnsList: common_vendor.unref(columnsList)
          }
        }),
        d: common_vendor.p({
          ["shop-info"]: common_vendor.unref(shopInfo)
        }),
        e: common_vendor.p({
          ["good-detail-info"]: common_vendor.unref(goodDetailInfo)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
