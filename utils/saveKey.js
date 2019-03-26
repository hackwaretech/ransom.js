/**
 * Salva a chave num arquivo especificado pelo `type`
 * @param { string } keyValue A chave a ser salva
 * @param { string } type o tipo de arquivo: `pub` ou `priv`
 */
module.exports = saveKey = (keyValue, type) => {
  const keypath = path.join(__dirname, "..", "keys", `key.${type}`);
  // cria o arquivo com as senhas salvas
  const fd = fs.openSync(keypath, "w");
  fs.writeSync(fd, keyValue);
  fs.closeSync(fd);
};
