function Pessoa(nome, sobrenome){
    //Atributos ou Métodos privados
    const ID = 124;
    const metodoInterno = function(){
        console.log('Não pode ser acessado!')
    }

    //Atributros ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Wesley', "Moraes");
const p2 = new Pessoa("Chris", "Redfield");
p2.metodo();