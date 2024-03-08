//Métodos úteis para melhor utilizar as promisses
//Promise.all - passa um array ou valores já resolvidos!
//Promise.race - A primeira que retornar, não importa quem! 
//Promise.resolve - 
//Promise.reject - Retorna a falha

function rand(min, max){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad Value');
        setTimeout(()=>{
            resolve(msg); //A promessa fica pendente, até chegar no resolve! E aí o resolve cai nos thens da vida
        }, tempo);
    });   
}

const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 3000),
    esperaAi('Promise', 3000),
    //'Outro valor'
]

//Retorna apenas um valor único
Promise.all(promises)
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro);
});

//A primeira que resolvers
Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
})

