const os = require("os");
const uniqid = require("uniqid");

// obtem as informações do sistema
const systemInfo = {
  uuid: uniqid(),
  infection: Date.now(),
  user: os.userInfo(),
  os: {
    type: os.type(),
    platform: os.platform(),
    architechture: os.arch(),
    release: os.release()
  }
};

module.exports = systemInfo;
