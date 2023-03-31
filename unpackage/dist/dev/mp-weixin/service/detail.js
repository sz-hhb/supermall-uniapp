"use strict";
const service_index = require("./index.js");
function getDetailPageData(iid) {
  return service_index.HyQuest.get("/detail", { iid });
}
function getDetailPageRecommendData() {
  return service_index.HyQuest.get("/detail/recommend");
}
exports.getDetailPageData = getDetailPageData;
exports.getDetailPageRecommendData = getDetailPageRecommendData;
