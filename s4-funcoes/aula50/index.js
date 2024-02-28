
//Aqui, o javascript não se importa se você está usando os argumentos lançados!
/*
function funcao(){
    console.log("erro?")
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9)
*/
//Tudo isso fica salvo aqui, em argumets:

/*
function funcao(){
    console.log(arguments)
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9);
//arguments não funciona para arrowfunction
*/

/*
function funcao(a, b, c, e){
    console.log(a, b, c, e)
}
funcao('Valor', 1);
//Ele atribui undefined! É o que js faz
*/

/*
function funcao(a, b=2, c= 4){
    //Quando não se envia parametros, ele pode assumir o valor que já está definido nele
    //Se você quer pular algum argumento, diga que ele é undefined!
    console.log(a + b + c)
}
funcao(2, undefined, 10); //Aqui ele substitui o valor de C! 
funcao(2, undefined);
*/

function conta(operador, acumulador, ...numeros){ //Rest operator! Ele pega o restante e transforma em um array... O Rest tem que ser sempre o últmo
    for(let numero of numeros){
        if(operador === '+') acumulador +=numero
    }

    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)