const fs = require("fs");
const path = require("path");
module.exports = loadId = () => {
  const infoPath = path.join(__dirname, "..", "info.dat");
  const systemInfo = fs.readFileSync(infoPath);
  return JSON.parse(systemInfo);
};
