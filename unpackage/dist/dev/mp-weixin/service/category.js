"use strict";
const service_index = require("./index.js");
function getCategoryData() {
  return service_index.HyQuest.get("/category");
}
function getSubCategoryData(maitKey) {
  return service_index.HyQuest.get("/subcategory", { maitKey });
}
function getSubCategoryDetailData(data) {
  return service_index.HyQuest.get("/subcategory/detail", { ...data });
}
exports.getCategoryData = getCategoryData;
exports.getSubCategoryData = getSubCategoryData;
exports.getSubCategoryDetailData = getSubCategoryDetailData;
