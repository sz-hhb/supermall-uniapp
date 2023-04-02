"use strict";
const common_vendor = require("../../common/vendor.js");
const store_category = require("../../store/category.js");
require("../../service/category.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  const _easycom_grid_view_item2 = common_vendor.resolveComponent("grid-view-item");
  (_easycom_tab_control2 + _easycom_grid_view_item2)();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
const _easycom_grid_view_item = () => "../../components/grid-view-item/grid-view-item.js";
if (!Math) {
  (CategoryClassification + CategoryItem + _easycom_tab_control + _easycom_grid_view_item)();
}
const CategoryClassification = () => "./cpns/category-classification.js";
const CategoryItem = () => "./cpns/category-item.js";
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const categoryStore = store_category.useCategoryStore();
    const { categoryMenuList, subCategoryList, subCategoryRecommendList } = common_vendor.storeToRefs(categoryStore);
    common_vendor.onLoad(() => {
      categoryStore.fetchCategoryMenuData();
    });
    const miniWallKey = common_vendor.ref("");
    const menuItemClick = (maitKey, miniWallkey) => {
      miniWallKey.value = miniWallkey;
      categoryStore.fetchSubCategotyData(maitKey);
      categoryStore.fetchSubCategoryDetailData("pop", { type: "pop", miniWallkey });
      categoryStore.fetchSubCategoryDetailData("new", { type: "new", miniWallkey });
      categoryStore.fetchSubCategoryDetailData("sell", { type: "sell", miniWallkey });
    };
    const currentTabIndex = common_vendor.ref(0);
    const tabItemClick = (index) => {
      currentTabIndex.value = index;
      categoryStore.fetchSubCategoryDetailData(
        store_category.types[index],
        { type: store_category.types[index], miniWallkey: miniWallKey.value }
      );
    };
    const categoryItemClick = (link) => {
      console.log(link);
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(menuItemClick),
        b: common_vendor.p({
          menuList: common_vendor.unref(categoryMenuList)
        }),
        c: common_vendor.f(common_vendor.unref(subCategoryList), (item, index, i0) => {
          return {
            a: common_vendor.o(categoryItemClick, index),
            b: "ec340118-1-" + i0,
            c: common_vendor.p({
              itemInfo: item
            }),
            d: index
          };
        }),
        d: common_vendor.o(tabItemClick),
        e: common_vendor.p({
          titles: ["流行", "新款", "精选"]
        }),
        f: common_vendor.f(common_vendor.unref(subCategoryRecommendList)[common_vendor.unref(store_category.types)[currentTabIndex.value]].list, (item, index, i0) => {
          return {
            a: "ec340118-3-" + i0,
            b: common_vendor.p({
              goodsInfo: item
            }),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
