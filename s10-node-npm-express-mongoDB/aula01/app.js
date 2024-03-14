//E para fazer a importação, não uso o import! E sim, o require
//const mod1 = require('./mod1');

/*
//também é possível fazer por desestruturação
const {nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);

//console.log(falaNome());
*/

//Módulos que são criados por nós, precisa-se de caminhos
//Módulos criados pelo Node ou NPM, é escrever o nome do modulo que ele já vai procurar na pasta! É um padrão do Node!
const path = require('path');
const axios = require('axios');

const {Pessoa} = require('./mod1');
const p1 = new Pessoa('Luiz');
console.log(p1);

axios('https://api.adviceslip.com/advice')
.then(response => console.log(response.data.slip.advice))
.catch(e=> console.log(e))