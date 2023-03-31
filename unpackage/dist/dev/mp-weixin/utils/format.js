"use strict";
function myriabitFormat(num) {
  return (parseInt(num) / 1e4).toFixed(1);
}
function timeFormat(time) {
  let timeStr = time * 1e3;
  let newTime = new Date(timeStr);
  let year = newTime.getFullYear();
  let month = newTime.getMonth() + 1 >= 10 ? "0" + (newTime.getMonth() + 1) : newTime.getMonth() + 1;
  let day = newTime.getDate();
  return `${year}-${month}-${day}`;
}
exports.myriabitFormat = myriabitFormat;
exports.timeFormat = timeFormat;
