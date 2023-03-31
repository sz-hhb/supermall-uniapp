"use strict";
const service_index = require("./index.js");
function getDetailPageData(iid) {
  return service_index.HyQuest.get("/detail", { iid });
}
exports.getDetailPageData = getDetailPageData;
