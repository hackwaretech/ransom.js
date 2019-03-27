const Crypto = use("crypto");

class EncryptionProvider {
  constructor() {
    this.cipher_rsa = null;
    this.secret_key = null;
  }

  /**
   * importa a chave pública recebida do sevidor que será utilizada para gerar a `secret key`
   * que utilizaremos na encriptação dos dados localmente.
   * @param { string } publicKey Chave pública recebida do servidor
   * @see https://nodejs.org/api/crypto.html#crypto_crypto_createpublickey_key
   */
  importPublicKey(publicKey) {
    this.cipher_rsa = Crypto.createPublicKey({
      key: publicKey,
      format: "pem",
      type: "pkcs1"
    });
  }
  /**
   * Gera uma `secret key` para encryptar os dados
   */
  generateSecretKey() {
    var session_key;
    // gera uma chave randomica de 256 bytes
    Crypto.randomBytes(256, (err, data) => (session_key = data));
    this.secret_key = Crypto.createSecretKey(session_key);
  }
}

module.exports = EncryptionProvider;
