
/*
const nome = "Wesley";
const sobrenome = "Moraes";

const falaNome = () => nome + ' ' + sobrenome;
module.exports.nome = nome;

//console.log(module.exports); 
//module é do node mesmo

//Também é possível fazer de modo resumido: Valor por Referência.

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//console.log(exports)

//E neste contexto, o this vai apontar como valor de referência ao modulo também.
this.qualquerCoisa = 'Recebi algum valor';

//console.log(exports);

*/

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

exports.Pessoa = Pessoa;