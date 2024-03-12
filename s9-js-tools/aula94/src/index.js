//Módulos são arquivos
//Quando um arquivo é criado nada consegue acessar aquele mundo
//É tipo o escopo, que só é acessado quando se retorna um valor praquele escopo

import {nome as nome2, sobrenome, idade, soma} from './modulo1';
const nome = 'Carlos';
console.log(nome, nome2, sobrenome, idade);
console.log(soma(5, 5));

//As exportações e importações posso realizar alterando os nomes deles
//Se eu exportar com outro nome a variável, assim eu terei que usar ela aqui
//E também posso renomear ela aqui

import {Pessoa} from './modulo1';

const pe = new Pessoa('Wesley', 'Moraes');
console.log(pe);

//Também pode importar tudo! com *

//import * as modulo1 from './modulo1';
import modulo1 from './modulo1';
console.log(modulo1(5,5));


//O default só pode ser definido uma vez por módulo
//Quando é assim eu não preciso específicar o que estou importante
//Ele vai importar o default daquele módulo
