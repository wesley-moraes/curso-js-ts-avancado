//Dados Primitivos
//String, number, undefined, null, boolean, symbol

const nome = "wesley" //string
const nome1 = 'wesley' //string
const nome3 = `wesley` //string
const num1 = 10 //number
const num2 = 10.52 //number
let nomeAluno; //undefined -> Não aponta pra local nenhum na memória
let sobrenomeAluno = null; //Nulo -> Não aponta pra local nenhum na memória, depois a gente vai desconfigurar!
//Sempre que eu quiser que não aponte para nenhum lugar na memória, eu preciso declarar ela como null! Porque depois ela vai ser alterada
const aprovado = false; //Boolean, true ou false (é um valor lógico)
//Existe um bug em javascript! Um valor nulo é exibido como objeto! Ele não é um objeto, ele e nulo, apenas! 

console.log(typeof aprovado, aprovado);
// console.log(typeof (nome, nome)); //Exibe, aqui, apenas a primeira informação! O que é estraho, porque eu gostaria que exibissem ambos

//É possível ficar apontando na memória que as variáveis tenham o mesmo comportamento
const a = [1, 2];
const b = a; //Faz o valor de B apontar para o mesmo valor na memória

console.log(a, b);

b.push(3);
console.log(a, b);

let aa = 2;
const bb = aa;
console.log(aa, bb)

aa = 3;
console.log(aa, bb);