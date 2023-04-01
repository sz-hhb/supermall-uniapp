"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  (UserInfo + AssetsDetail)();
}
const UserInfo = () => "./cpns/user-info.js";
const AssetsDetail = () => "./cpns/assets-detail.js";
const _sfc_main = {
  __name: "profile",
  setup(__props) {
    const assetsInfo = common_vendor.reactive([
      {
        id: 0,
        label: "我的余额",
        balance: "0.00",
        utils: "元"
      },
      {
        id: 1,
        label: "我的优惠",
        balance: "0",
        utils: "个"
      },
      {
        id: 2,
        label: "我的积分",
        balance: "0",
        utils: "分"
      }
    ]);
    const orderList = common_vendor.reactive([
      { icon: common_assets.messagePNG, iconColor: "#ff8198", info: "我的消息" },
      { icon: common_assets.appPNG, iconColor: "#fc7b53", info: "积分商城" },
      { icon: common_assets.vipPNG, iconColor: "#ffc636", info: "会员卡" }
    ]);
    const serviceList = common_vendor.reactive([
      { icon: common_assets.cartPNG, iconColor: "#ff8198", info: "我的购物车" },
      { icon: common_assets.pointerPNG, iconColor: "#ff8198", info: "下载购物APP" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["assets-info"]: assetsInfo
        }),
        b: orderList,
        c: serviceList
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/uniapp+taro/HYMallApp/pages/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
