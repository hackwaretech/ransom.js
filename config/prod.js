const path = require("path");
const extensions = require("./extensions");

const config = {
  remoteServer: "https://your_domain_.com",
  baseDirectory: "/",
  extensions,
  sleepTime: 1000 * 60 * 30,
  sysInfoPath: path.join(__dirname, "..", "info.dat"),
  secretKeyPath: path.join(__dirname, "..", "secret.key"),
  privateKeyPath: path.join(__dirname, "..", "private.key"),
  passphrasePath: path.join(__dirname, "..", "passphrase.txt")
};

module.exports = config;
