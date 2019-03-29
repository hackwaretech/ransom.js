const windows = require("./windows");
const linux = require("./linux");
const macos = require("./macos");

const availableDestinations = { windows, linux, macos };

module.exports = availableDestinations[process.env.BUILD_DEST];
