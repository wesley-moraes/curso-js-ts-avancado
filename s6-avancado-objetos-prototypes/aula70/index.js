//Literal é o valor direto! O básico do básico e eles tem construtores
//Eles são simples e 

//Objeto literal
//Chave{nome} e Valor{Wesley}
const pessoa = {
    nome: 'Wesley',
    sobrenome: 'Moraes'
}

/*
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa['nome']); //Um jeito dinâmico
*/

//Temos o construtor do objeto também para criar objetos
const pessoa1 = new Object();
pessoa1.nome = 'Wesley';
pessoa1.sobrenome = 'Moraes';
pessoa1.idade = 29

console.log(pessoa1.nome);

//delete pessoa1.nome;
//console.log(pessoa1.nome);
pessoa1.falarNome = function(){
    console.log(`${this.nome} está falando seu nome`)
}
pessoa1.falarNome();

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

//Métodos que manipulam aquele objeto
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    console.log('chave: ', chave); //Ver as chaves
    console.log('Valores das chaves: ', pessoa1[chave]); //Notação de Colchete
    //Quando as functions estão dentro de objetos chamamos de metodos!
}

//Padrão de projeto
//factory functions e construtor functions = Métodos de trabalho
//Factory é diferente de construtor porque no construtor o JS faz muitas coisas por trás, é diferente
//O New muda o comportamento da função!
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){ //Eu posso retirar o get dali porque é opcional
            return `${this.nome} ${this.sobrenome}` 
        }
    }
}

const p1 = criaPessoa('Wesley', 'Moraes');
console.log(p1);

//Constructor funcion - Ela cria um objeto!
//NEW = Cria um novo objeto. E como cria um novo objeto, o this vai apontar para o objeto
// O this tem que estar atrelado a queme eu criar!
function Pessoa(nome, sobrenome){//na função construtora não se coloca verbos!
    this.nome = nome;
    this.sobrenome = sobrenome

    //Object.freeze(this) //Assim eu congelo mesmo o meu objeto! Tornando-o uma referencia de meoria
}

//Endereço de memória
//Referência de memória
const P1 = new Pessoa('Wesley', 'Miranda');
console.log(P1);
const P2 = new Pessoa('Maria', 'Fonseca');
console.log(P2);

