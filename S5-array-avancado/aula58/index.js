//Valores por referência
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);
//Dele o argumento, mas mantem o indice

//...restOperator
const novoNomes = [...nomes];
console.log(novoNomes);
const novoNomes2 = nomes;
console.log(novoNomes2);
novoNomes.pop(); //Remove o último elemento
console.log(novoNomes)

//lenght não é um método, é um atributo, por isso não utiliza parenteses nele
console.log(novoNomes.length);

const removido = novoNomes.pop();
console.log(removido);

//Shift, ele remove no começo e realoca todos!
const nomes2 = ['Eduardo', 'Maria', 'Joana'];
nomes2.shift();
console.log(nomes2);

//push adiciona um novo valor
nomes2.push('Luiz');
console.log(nomes2);

//Unshift: Adiciona no começo!
nomes2.unshift('Wesley');
console.log(nomes2);

//Slice = Fatia
const slicer = nomes2.slice(0, 2); //O indice vai no -1! Ou seja; 
//Quando trabalho com indice negativo, eu vou de trás para frente
console.log(slicer);

//Split - seprar uma string
const nomeSplit = "Wesley dos Santos Moraes";
const novoNomeSplit = nomeSplit.split(' ');
console.log(novoNomeSplit);

//join - Unir elementos
const nomesUnir = ["Wesley", "dos", "Santos", "Moraes"];
const nomesUnidos = nomesUnir.join('* ');
console.log(nomesUnidos);