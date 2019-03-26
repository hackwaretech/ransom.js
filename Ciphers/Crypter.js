const path = require("path");
const Crypto = require("crypto");
const fs = require("fs");

// exporta as chaves
const keypath = path.join(__dirname, "..", "keys", "key.pub");
var pubKey = fs.readFileSync(keypath);
/**
 * Encripta os dados baseados numa chave pública
 * @param { Buffer } data - os dados a serem encriptados
 */
const cipher = data => Crypto.publicEncrypt(pubKey, data);

module.exports = cipher;
