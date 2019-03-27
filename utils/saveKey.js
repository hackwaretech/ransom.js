/**
 * Salva a chave num arquivo especificado pelo `type`
 * @param { string } keyValue A chave a ser salva
 * @param { string } keyname o tipo de arquivo: `pub` ou `priv`
 */
module.exports = saveKey = (keyValue, keyname) => {
  const keypath = path.join(__dirname, "..", "keys", `${keyname}.pem`);
  // cria o arquivo com as senhas salvas
  const fd = fs.openSync(keypath, "w");
  fs.writeSync(fd, keyValue);
  fs.closeSync(fd);
};
