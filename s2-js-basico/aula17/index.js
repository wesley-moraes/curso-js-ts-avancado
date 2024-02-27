function soma(x, y){
    const resultado = x + y;
    return resultado; 
    //Depois do Return, nada mais é executado. O código para ali.

    //São variaveis que estão protegidas dentro da função! Elas não podem ser usadas fora da função!
}
const resultado = soma(2, 2);
console.log(resultado)

/*
const raiz = function(n){
    return n ** 0.5;
}
*/

console.log(raiz(9));
console.log(raiz(25));

//Arrow function
const raiz = n => n ** 0.5 
//         param, corpo da funcao, não precisa da palavra return