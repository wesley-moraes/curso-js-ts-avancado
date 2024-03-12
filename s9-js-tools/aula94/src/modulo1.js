const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;

//Isso significa que essa função 
export default function soma(x, y){
    return x + y;
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome, idade, soma } //Me deixa importar apenas o nome
//Também posso retornar como as default
