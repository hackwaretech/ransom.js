const path = require("path");
const Crypto = require("crypto");
const fs = require("fs");
const algorithm = "aes-256-ctr";

// endereço do arquivo de chaves
const keypath = path.join(__dirname, "..", "keys", "key.json");
// lê o arquivo e parseia os dados
const keys = JSON.parse(fs.readFileSync(keypath));
// transofrma as keys em valores válidos
const KEY = Buffer.from(keys.key, "hex");
const IV = Buffer.from(keys.iv, "hex");
// cria uma cifra responsável por decifrar os dado
const cipher = Crypto.createDecipheriv(algorithm, KEY, IV);

module.exports = cipher;
