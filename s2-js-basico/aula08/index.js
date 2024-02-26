/*
Claire Redfield tem 21 anos, pesa 70kg
tem 1.72 de altura  e seu IMC é de 25.555
*/

const nome = "Claire";
const sobreNome = "Redfield";
const idade = 21;
const peso = 70;
const altura = 1.72;
let imc = peso / (altura * altura)
let anoNascimento;

console.log(nome, sobreNome, "tem", idade, ", pesa", peso,"kg", "e tem ", altura, " e seu IMC é ", imc, ". Nasceu no ano de ", 2024 - idade)
//Eu poderia unir os valores! Concatenar toda essa string! Fazendo uma string só! Ao invés de ter vários strings
//E também temos a opção de interpolação com crases, que é um jeito mais moderno sim
console.log(`meu nome é ${nome} e tenho ${idade} anos`)