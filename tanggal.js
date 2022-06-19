var moment = require("moment");
var tgl = "Sekarang: " + moment().format("D MMMM YYYY, h:mm:ss a");

exports.Show = function () {
  return tgl;
};
