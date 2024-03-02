//Prototype: É uma das bases para POO. 
//O javascript é baseado em protótipos para passar propriedades e métodos
//De um objeto para outro.

//Protótipo é o que foi criado pela primeira vez servindo de modelo para futuras construções

//O prototype é como se encapsulasse tudo! Mas ele é uma segunda opção! Prmeiro executa o que foi criado mesmo


//Construtora -> molde(classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
} //Isso melhora muito a performance do programa

//Instância
const pessoa1 = new Pessoa('Wesley', 'M.'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora

//pessoa1.prototype.estouAqui = "Hahaha";
console.log(pessoa1.nomeCompleto());
console.dir(pessoa1);
console.dir(pessoa2);

