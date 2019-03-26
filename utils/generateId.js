const os = require("os");
const uniqid = require("uniqid");

// obtem as informações do sistema
const systemInfo = {
  uuid: uniqid(),
  date: Date.now(),
  userInfo: os.userInfo(),
  os: {
    type: os.type(),
    platform: os.platform(),
    architechture: os.arch(),
    release: os.release()
  }
};

module.exports = systemInfo;
