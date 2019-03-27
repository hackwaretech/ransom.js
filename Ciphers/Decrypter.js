const Crypto = require("crypto");
const algorithm = "aes-256-ctr";
const encryptionProvider = require("./encryptionProvider");

// cria uma cifra responsável por decifrar os dado
const createDecipher = privateKey => {
  const provider = new encryptionProvider();
  provider.importPrivateKey(privateKey);
  const { IV, KEY } = provider.loadEncryptionKey();
  return Crypto.createDecipheriv(algorithm, KEY, IV);
};

module.exports = createDecipher;
