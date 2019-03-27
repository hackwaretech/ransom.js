const fs = require("fs");
const path = require("path");

/**
 * gera a identificação da máquina para posteriormente
 * Enviar para o servidor
 * @return { Object } Informações detalhadas do sistema host
 */
const loadId = () => {
  const infoPath = path.join(__dirname, "..", "info.dat");
  if (!fs.existsSync(infoPath)) {
    return null;
  }
  var systemInfo = JSON.parse(fs.readFileSync(infoPath));
  if (typeof systemInfo !== "object") {
    // não existe o systemInfo ainda
    return null;
  }
  return systemInfo;
};

module.exports = loadId;
