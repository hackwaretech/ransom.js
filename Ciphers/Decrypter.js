const Crypto = require("crypto");
const algorithm = "aes-256-ctr";
const encryptionProvider = require("../utils/encryptionProvider");

// cria uma cifra responsável por decifrar os dado
const createDecipher = privateKey => {
  const provider = new encryptionProvider();
  provider.importPrivateKey(privateKey);
  const { IV, KEY } = provider.loadEncryptionKey();
  console.log("key Decoded:", KEY);
  console.log("IV Decoded:", IV);
  return Crypto.createDecipheriv(algorithm, KEY, IV);
};

module.exports = createDecipher;
