const path = require("path");

const config = {
  remoteServer: "http://localhost:3333",
  baseDirectory: "./files",
  extensions: ["mytxt"],
  sleepTime: 1000 * 60 * 30,
  sysInfoPath: path.join(__dirname, "..", "info.dat"),
  secretKeyPath: path.join(__dirname, "..", "secret.bin"),
  privateKeyPath: path.join(__dirname, "..", "private.key"),
  passphrasePath: path.join(__dirname, "..", "passphrase.txt")
};

module.exports = config;
