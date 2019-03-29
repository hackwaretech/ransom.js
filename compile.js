const { compile } = require("nexe");

// will require based on enviroment var BUILD_DEST
const buildConfig = require("./build");

compile(buildConfig);
