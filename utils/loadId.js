const fs = require("fs");
const { sysInfoPath } = require("../config");

/**
 * gera a identificação da máquina para posteriormente
 * Enviar para o servidor
 * @return { Object } Informações detalhadas do sistema host
 */
const loadId = () => {
  if (!fs.existsSync(sysInfoPath)) {
    return null;
  }
  var systemInfo = JSON.parse(fs.readFileSync(sysInfoPath));
  if (typeof systemInfo !== "object") {
    // não existe o systemInfo ainda
    return null;
  }
  return systemInfo;
};

module.exports = loadId;
