//Declaracao de funcao
//literal

function falaOi(){
    console.log('oi')
}
//Hoisting = Eleva a função dela! Ele executa antes da criação! Não importa o que aconteça, ela é executada

//First-class objects (Objetos de primeira classe) - Pode passar dados etc
//function expression

const souUmDado = function(){
    console.log('sou um dado')
}
souUmDado(); //posso fazer uma variável ser uma função e eser executada

function executaFuncao(funcao){
    funcao(); //Recebo uma função como parametro e executo ela aqui dentro
}

//Arrow function, function expression

const arrowFunction = () => {
    console.log("sou uma arrow funcion")
}
arrowFunction();

//Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando...')
    },
    outroFalar(){
        console.log('Outra maneira de falar')
    }
}
obj.falar();
obj.outroFalar();