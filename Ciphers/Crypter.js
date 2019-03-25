const path = require("path");
const Crypto = require("crypto");
const fs = require("fs");

const algorithm = "aes-256-ctr";
const HARDCODED_KEY = "hackware strike force strikes u!";
var IV = Buffer.alloc(16);
var KEY = Buffer.from(HARDCODED_KEY);

// Randomizando o IV
IV = Buffer.from(
  Array.prototype.map.call(IV, () => {
    return Math.floor(Math.random() * 256);
  })
);

// exporta as chaves
const keypath = path.join(__dirname, "..", "keys", "key.json");
// cria o arquivo com as senhas salvas
const fd = fs.openSync(keypath, "w");
fs.writeSync(
  fd,
  JSON.stringify({ iv: IV.toString("hex"), key: KEY.toString("hex") })
);
fs.closeSync(fd);

// cria a cifra de encriptação
const cipher = Crypto.createCipheriv(algorithm, KEY, IV);

module.exports = cipher;
