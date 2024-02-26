/**
 * Aritméticos
 * + Adição / Concatenção
 * - / *
 * ** - potenciação
 * % - retorna o resto da divisão
 * 
 * () primeir é executado o que estiver dentro dele
 * Depoi os **, * / %, depois + -, 
 * 
 * ++ incrementa a variável! Podendo ser um pré incremento ou um pós incremento
 * -- Decremento! Subtrai!
 * 
 * Operadores de atribuição!
 * += ou -= ou *=
 * Recebele ele mesmo 
 */

let contador = 1;
//Pode ser antes ou depois, essa incrementação, ++contador
contador++; // 2
contador++; // 3
contador++; // 4

//NaN - Not a number parseInt(inteiro), parseFloat (decimais)
const num1 = 10;
const num2 = parseInt('5.2');
const num3 = parseFloat('5.2');
const num4 = Number('5.2'); //Ele se vira e entende sobre o que estamos tratando
console.log(num1 + num2);
console.log(num1 + num3);
