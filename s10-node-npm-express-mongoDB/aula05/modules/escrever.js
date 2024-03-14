const fs = require('fs').promises;

//const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

module.exports = (caminho, dados) =>{
    fs.writeFile(caminho, dados, {
        flag: 'w',
        //flag: 'a',
        encoding: 'utf8'
    })
}