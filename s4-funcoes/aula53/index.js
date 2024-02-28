function retornaFuncao(){
    const nome = 'wesley';
    return function(){
        return nome;
    }
}

//Callbacks

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){
    setTimeout(function() {
        console.log('f1');
        if(callback) callback(); //Callback é a função! rsrs Ele está apenas recebendo uma função para ser executado
    }, rand())
}

function f2(callback){
    setTimeout(function() {
        console.log('f2');
        if(callback) callback();
    }, rand())
}

function f3(callback){
    setTimeout(function() {
        console.log('f3');
        if(callback) callback();
    }, rand())
}

f1(f1callback);

function f1callback(){
    f2(f2callback)
}

function f2callback(){
    f3(f3callcack)
}

function f3callcack(){
    console.log("Olá mundo")
}