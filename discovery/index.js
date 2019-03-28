const fs = require("fs"),
  path = require("path");
const config = require("../config");
/**
 * Navega nos arquivos a patir da pasta `dir` e filtra os arquivos
 * @callback callback a função que deve ser executada em cada arquivo encontrado
 */
function walk(callback) {
  // permite que passemos extensões expecíficas para serem buscadas

  // lê o diretório atual
  fs.readdir(config.baseDirectory, function(err, files) {
    if (!err) {
      files.forEach(function(file) {
        var filepath = path.join(config.baseDirectory, file);
        fs.stat(filepath, function(err, stats) {
          if (!err) {
            if (stats.isDirectory()) {
              walk(filepath, callback);
            } else if (stats.isFile()) {
              let ext = path.extname(filepath).replace(".", "");
              let isWanted = config.extensions.find(wanted => wanted === ext);
              if (isWanted) callback(filepath, stats);
            }
          }
        });
      });
    }
  });
}

module.exports = walk;
