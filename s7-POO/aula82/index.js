const _velocidade = Symbol('velocidade');
//isso torna a variável privada! Pra setar tem que ser com set


class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0
    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;

    }

    freiar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

/*
for(let i = 0; i <= 200; i++){
    c1.acelerar();
}
*/

//c1.acelerar();
//c1.acelerar();
c1.velocidade = 99;

console.log(c1.velocidade);

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

}

const p1 = new Pessoa('Wesley', 'Moraes');
p1.nomeCompleto = "Wesley Santos Moraes"; //O sinal de igual ativa o set! 
console.log(p1.nomeCompleto);
p1.exibirInfo = "call";