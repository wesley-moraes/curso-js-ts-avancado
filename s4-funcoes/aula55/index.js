//Principio de factory function

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`; 
        }
    };
}

const p1 = criaPessoa("Wesley", "Moraes");
console.log(p1.fala("Falando sobre JS"))