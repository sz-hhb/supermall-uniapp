"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _easycom_grid_view_item2 = common_vendor.resolveComponent("grid-view-item");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_tab_control2 + _easycom_grid_view_item2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
const _easycom_grid_view_item = () => "../../components/grid-view-item/grid-view-item.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + _easycom_tab_control + _easycom_grid_view_item + _easycom_uni_grid_item + _easycom_uni_grid)();
}
const HomeBanner = () => "./cpns/home-banner.js";
const HomeRecommend = () => "./cpns/home-recommend.js";
const HomePopular = () => "./cpns/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const { banners, recommends, goodsList } = common_vendor.storeToRefs(homeStore);
    const currentType = common_vendor.ref(0);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultiData();
      homeStore.fetchHomeData("pop", 1);
      homeStore.fetchHomeData("new", 1);
      homeStore.fetchHomeData("sell", 1);
    });
    common_vendor.onReachBottom(() => {
      homeStore.fetchHomeData(
        store_home.types[currentType.value],
        goodsList.value[[store_home.types[currentType.value]]].page + 1
      );
    });
    const bannerClick = (link) => {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    };
    const recommendItemClick = (link) => {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    };
    const tabItemClick = (index) => {
      currentType.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(bannerClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.o(recommendItemClick),
        d: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        e: common_vendor.o(tabItemClick),
        f: common_vendor.p({
          titles: ["流行", "新款", "精选"]
        }),
        g: common_vendor.f(common_vendor.unref(goodsList)[common_vendor.unref(store_home.types)[currentType.value]].list, (item, index, i0) => {
          return {
            a: "c48adcd8-6-" + i0 + "," + ("c48adcd8-5-" + i0),
            b: common_vendor.p({
              ["goods-info"]: item
            }),
            c: "c48adcd8-5-" + i0 + ",c48adcd8-4",
            d: item.iid
          };
        }),
        h: common_vendor.p({
          column: 2,
          square: false,
          ["show-border"]: false,
          highlight: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
