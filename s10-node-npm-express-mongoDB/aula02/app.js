
const Cachorro = require('./mod2');

//const multiplicacao = require('./mod1');
//console.log(multiplicacao(2, 2))

//const doguinho = new cachorrinho('Dog');
//doguinho.latir();

const c1 = new Cachorro('Dog');
c1.latir();

//Existem 2 variáveis que podemos utilizar para acessar questões de diretório. 
//Caminhos absolutos:
//console.log(__filename); //Mostra o arquivo atual
//console.log(__dirname); //Mostra o diretório atual

//Um módulo que já tem no node é o path
const path = require('path'); //Ele já resolve a questão do caminho, porque quando estamos em desenvolvimento
//Cada pessoa vai ter sua rota! Inclusive em outros sistemas operacionais.
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, '..', '..')); //ele vai excluir/voltar duas pastas anteriores
//console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')); //Apenas um exemplo que ele pode navegar pra onde vc deseja

//Vc pode adicionar a extensão do seu módulo, que no caso é um .js, mas não é necessário
