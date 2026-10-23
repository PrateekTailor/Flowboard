const mongoose = require("mongoose");

function connectiondbs(url) {
  return mongoose.connect(url);
}
module.exports = {
  connectiondbs,
};
