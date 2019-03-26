const path = require("path");
const Crypto = require("crypto");
const fs = require("fs");

// endereço do arquivo de chaves
const keypath = path.join(__dirname, "..", "keys", "key.priv");
// lê o arquivo e parseia os dados
const privKey = fs.readFileSync(keypath);
// cria uma cifra responsável por decifrar os dado
const cipher = data => Crypto.privateDecrypt(privKey, data);

module.exports = cipher;
