function mostraHora(){
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}
/*
function funcaoDoInterval(){
    console.log(mostraHora());
}

//Quando eu quero que uma função seja executada, eu tenho que colocar parenteses
//Senão, eu apenas passo ela como referência
setInterval(funcaoDoInterval, 1000);
*/

//modo mais resumido de escrever a mesma função
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);

//Parar a função!
setTimeout(function(){
    clearInterval(timer);
}, 3000)

setTimeout(function(){
    console.log('Olá mundo')
}, 5000)