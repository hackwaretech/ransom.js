const rw = require("rw-stream");
module.exports = asyncWorker = async (file, cipherFn) => {
  // função assíncrona retorna promise
  return new Promise(async (resolve, reject) => {
    // abre as duas streams de leitura e escrita ao mesmo tempo no arquivo
    const { readStream, writeStream } = await rw(file);
    // cifra ou decifra o arquivo, dependendo de cipherFn
    readStream.pipe(cipherFn).pipe(writeStream);
    writeStream.on("finish", resolve).on("error", reject);
  });
};
