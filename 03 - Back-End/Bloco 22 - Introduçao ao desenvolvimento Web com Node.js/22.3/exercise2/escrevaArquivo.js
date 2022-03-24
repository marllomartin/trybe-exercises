const fs = require('fs');

function escrevaArquivo(nomeDoArquivo, conteudoDoArquivo) {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
};

module.exports = escrevaArquivo;
