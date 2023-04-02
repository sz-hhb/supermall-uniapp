"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "http://192.168.0.102:3007";
class HYQuest {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        timeout: 1e4,
        method,
        data,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          throw err;
        }
      });
    });
  }
  get(url, params) {
    return this.request(url, "GET", params);
  }
  post(url, data) {
    return this.request(url, "POST", data);
  }
}
const HyQuest = new HYQuest();
exports.HyQuest = HyQuest;
