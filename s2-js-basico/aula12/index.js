//Exercicio de programação

let varA = 1; //B
let varB = 2; //C
let varC = 3; //A

/*
let varTempA = varA;
varA = varB;
varB = varC;
varC = varTempA;

console.log("A: ", varA, "B: ", varB,  "C: ", varC);
//espera-se: 2, 3, 1
*/

//Outra solução:
[varA, varB, varC] = [varB, varC, varA];
console.log("A: ", varA, "B: ", varB,  "C: ", varC);