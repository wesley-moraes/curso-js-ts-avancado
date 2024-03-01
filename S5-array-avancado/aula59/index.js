const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Júlia'];

//splice (indice, delete, elem1, elem2, eken); Onde eu começo, e até onde eu quero remover! 
//elemn1 = Novo que eu quero receber

//const removidos = nomes.splice(4, 1);
//const removidos = nomes.splice(3, 2);//Indice  3, remove 2
//Negativos faz de trás para frente
//console.log(nomes, removidos);
//Number.MAX_VALUE
const removidos = nomes.splice(3, 2, 'Wesley', 'Danilo');
console.log(nomes);