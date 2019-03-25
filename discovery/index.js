const fs = require("fs"),
  path = require("path");
var wantedExtensions = require("../static/extensions");

/**
 * Navega nos arquivos a patir da pasta `dir` e filtra os arquivos
 * baseando-se nos tipos de extensões
 * @param { String} dir a pasta para buscar os arquivos
 * @param { Object } [options] opções para os filtros de busca de arquivos
 * @param { Array <string> } options.extensions extensões de arquivos que serão procurados, ex. `png`, `jpg`, `xls`, etc.
 * @callback callback a função que deve ser executada em cada arquivo encontrado
 *
 */
function walk(dir, options, callback) {
  // permite que passemos extensões expecíficas para serem buscadas
  if (
    options &&
    options.extensions &&
    (Array.isArray(options.extensions) && options.extensions.length > 0)
  )
    wantedExtensions = options.extensions;

  // lê o diretório atual
  fs.readdir(dir, function(err, files) {
    if (!err) {
      files.forEach(function(file) {
        var filepath = path.join(dir, file);
        fs.stat(filepath, function(err, stats) {
          if (!err) {
            if (stats.isDirectory()) {
              walk(filepath, callback);
            } else if (stats.isFile()) {
              let ext = path.extname(filepath).replace(".", "");
              let isWanted = wantedExtensions.find(wanted => wanted === ext);
              if (isWanted) callback(filepath, stats);
            }
          }
        });
      });
    }
  });
}

module.exports = walk;
