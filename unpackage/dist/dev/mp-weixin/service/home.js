"use strict";
const service_index = require("./index.js");
function getHomeMultiData() {
  return service_index.HyQuest.get("/home/multidata");
}
function getHomeData(type, page) {
  return service_index.HyQuest.get("/home/data", { type, page });
}
exports.getHomeData = getHomeData;
exports.getHomeMultiData = getHomeMultiData;
