/**
 * Salva a chave num arquivo especificado pelo `type`
 * @param { string } keyValue A chave a ser salva
 * @param { string } keyname nome do arquivo de chave a ser salvo
 */
module.exports = saveKey = (keyValue, keyname) => {
  const keypath = path.join(__dirname, "..", "keys", keyname);
  // cria o arquivo com as senhas salvas
  const fd = fs.openSync(keypath, "w");
  fs.writeSync(fd, keyValue);
  fs.closeSync(fd);
};
