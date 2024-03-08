//Promessas = Promisses!
//Não tem noção exata de quando esses dados vão retornar para você
//Uma função de callback é uma solução antiga! Promisses vieram
//Justamente para resolver isso.

//É algo que está executando em paralelo!
//As promisses são executadas depois

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

esperaAi("Frase 1", rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi("Frase 2", rand(1, 3));
})
.then(resposta => {
    console.log(resposta)
    //return resposta + " Vai pro outro Then";
    return esperaAi(3333, rand(1, 3))
})
.then(resposta => {
    console.log(resposta);
})
.catch( e => {
    console.log('ERRO', e)
});

/*
esperaAi("Frase 1", rand(1, 3));
esperaAi("Frase 2", rand(1, 3));
esperaAi("Frase 3", rand(1, 3));
*/