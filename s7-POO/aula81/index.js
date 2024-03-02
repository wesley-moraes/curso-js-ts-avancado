//Classes é a mesma coisa que funçã construtora em JS!
//É só um modo de escrever a mesma coisa


//É interessante porque 
class Pessoa{
    constructor(nome, sobrenome){ //Aqui que se passa os parametros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Curiosamente, não precisa colocar ponto e vígula ;
    falar(){
        console.log(`${this.nome} está falando.`);
    }

    comer(){
        console.log(`${this.nome} está comendo.`);
    }

    beber(){
        console.log(`${this.nome} está bebendo.`);
    }

}

const p1 = new Pessoa("Wesley", "Moraes");
console.log(p1);