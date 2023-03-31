"use strict";
const common_vendor = require("../../common/vendor.js");
const store_detail = require("../../store/detail.js");
require("../../service/detail.js");
require("../../service/index.js");
if (!Math) {
  (DetailTabBar + DetailSwiper + DetailBaseInfo + DetailShopInfo + DetailGoodInfo + DetailGoodParam + DetailGoodComment)();
}
const DetailTabBar = () => "./cpns/detail-tab-bar.js";
const DetailSwiper = () => "./cpns/detail-swiper.js";
const DetailBaseInfo = () => "./cpns/detail-base-info.js";
const DetailShopInfo = () => "./cpns/detail-shop-info.js";
const DetailGoodInfo = () => "./cpns/detail-good-info.js";
const DetailGoodParam = () => "./cpns/detail-good-param.js";
const DetailGoodComment = () => "./cpns/detail-good-comment.js";
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
    const { topImages, goodInfo, columnsList, shopInfo, goodDetailInfo, goodParamInfo, goodParamRule, goodRateList } = common_vendor.storeToRefs(detailStore);
    common_vendor.onLoad(() => {
      detailStore.fetchDetailPageData(props.id);
    });
    const currentDetailPageIndex = common_vendor.ref(0);
    const detailTabBarClick = (index) => {
      currentDetailPageIndex.value = index;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(detailTabBarClick),
        b: currentDetailPageIndex.value === 0
      }, currentDetailPageIndex.value === 0 ? {
        c: common_vendor.p({
          ["banner-list"]: common_vendor.unref(topImages)
        }),
        d: common_vendor.p({
          ["base-info"]: {
            goodInfo: common_vendor.unref(goodInfo),
            columnsList: common_vendor.unref(columnsList)
          }
        }),
        e: common_vendor.p({
          ["shop-info"]: common_vendor.unref(shopInfo)
        }),
        f: common_vendor.p({
          ["good-detail-info"]: common_vendor.unref(goodDetailInfo)
        })
      } : {}, {
        g: currentDetailPageIndex.value === 1
      }, currentDetailPageIndex.value === 1 ? {
        h: common_vendor.p({
          ["good-params"]: {
            goodParamRule: common_vendor.unref(goodParamRule),
            goodParamInfo: common_vendor.unref(goodParamInfo)
          }
        })
      } : {}, {
        i: currentDetailPageIndex.value === 2
      }, currentDetailPageIndex.value === 2 ? {
        j: common_vendor.p({
          ["good-rate-list"]: common_vendor.unref(goodRateList)
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
