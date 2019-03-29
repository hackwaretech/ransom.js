const fs = require("fs");
/**
 * Salva a chave num arquivo especificado pelo `type`
 * @param { string } keyValue A chave a ser salva
 * @param { string } keypath caminho absoluto do arquivo
 */
module.exports = saveKey = (keyValue, keypath) => {
  // cria o arquivo com as senhas salvas
  fs.writeFileSync(keypath, keyValue);
};
