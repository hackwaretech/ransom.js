const os = require("os");
const uniqid = require("uniqid");
const fs = require("fs");

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

// Salva os dados do sistema num arquivo binário
fs.writeFileSync("../info.dat", systemInfo);

module.exports = systemInfo;
