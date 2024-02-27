function criaPessoa(nome, sobrenome, idade){
    
    /*
    O modo escrito abaixo é uma versão resumida que o javascript entende dessa mesma maneira aqui(por ter o mesmo nome):
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
    */
    /*
    * return { nome, sobrenome, idade } 
    */

    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala(){
            console.log(`${this.nome} ${this.sobrenome} fala oi...`)
        }
    }

}

const pessoa1 = criaPessoa("Wesley", "Moraes", 29);
const pessoa2 = criaPessoa("Janna", "Piltover", 30);
console.log(pessoa1, pessoa2)
pessoa1.fala()
