const moment = require("moment");
const { formatDate } = require("../lib/formatDate");
const helpers = { formatDate };

moment.locale("es");

module.exports = helpers;
