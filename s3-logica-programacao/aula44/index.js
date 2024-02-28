//Bloco try catch! Tente executar, se não executar caia no outro bloco! É como se fosse um if else mesmo.

/*
try{
    console.log(naoExisto);
}catch(err){
    console.log("Não existo")
    console.log(err)
}
*/

function soma(x, y){
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ){
        throw new Error("x e y precisam ser números!")
    }

    return x + y;
}

try{
    console.log(soma(1 , 2));
    console.log(soma('1', 2))
}catch(err){
    console.log(err);
    console.log("Opção de exibir algo mais amigavel pro usuario final")
}

//finally: É sempre executado

try{

}catch(e){

}finally{

}

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date");
    }

    //Se não mandar nada, pega e faz da data atual
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        minute: '2-digit',
        second: '2-digit',
        hour: '2-digit'
    })
}

try{
    const hora = retornaHora();
    console.log(hora)
}catch(e){
    console.log("tratar erro: ", e)
}finally{
    console.log("Tenha um bom dia")
}


