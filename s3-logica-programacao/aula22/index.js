/**
 * Operadores Lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 * 
 */

const expVerdadeira = true && true && true && true; //tudo precisa ser verdadeiro para retornar verdadeiro
console.log(expVerdadeira);

const expOu = true || false || false;//Apenas se uma for verdadeira, já é o fuciente para ser verdadeiro. Se for false || false já será um resultado false
console.log(expOu);

//! -> Inverte o false! Ele vira true
console.log("negação" , !false);
console.log(!!false); //Inverte e Inverte!
