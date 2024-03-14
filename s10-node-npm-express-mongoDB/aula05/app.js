const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever')

const ler = require('./modules/ler');

/*
const pessoas = [
    {nome: 'Wesley'},
    {nome: 'Luiz'},
    {nome: 'Luiza'},
    {nome: 'Jonatas'},
    {nome: 'Debora'}
]

const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json)
*/

async function leArquivo(caminho){
    
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    //console.log('Cheguei aqui', dados);
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

/*
const dadosArquivo = leArquivo(caminhoArquivo).
then(dados => console.log(dados));
*/
leArquivo(caminhoArquivo);