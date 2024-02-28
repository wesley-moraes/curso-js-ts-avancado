//Funcao que cria um objeto

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome}
}

console.log(criaPessoa('Wesley', 'Moraes'));
criaPessoaLiteral = {
    nome: 'Wesley',
    sobrenome : 'Moraes'
}
//Ambas acima são a mesma coisa

function falaFrase(comeco) {
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto; //Retorno a função FALA RESTO. Ou seja, eu retorno uma outra função que precisa ser executada
}

const fala = falaFrase('olá');
const resto = fala('mundo!');
console.log(resto);