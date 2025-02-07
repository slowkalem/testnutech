const moment = require("moment");

class StringUtil {
  static getTimestamp() {
    return moment().format('DD-MM-YYYY HH:mm:ss');
  }
}

module.exports = StringUtil;
