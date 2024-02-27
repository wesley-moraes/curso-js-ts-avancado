/**
 * && -> flase && true -> false;; "Ele retorna o valor mesmo" se não encontrar nenhuma compração
 * Curto-Circuito: Ele para de executar todas as outras comparações se ele já encontrar uma questão falsa!
 * Ele retorna o valor falso! Se todos forem verdadeiros, ele retorna apenas o último! No caso, ele retorna o último
 * no operador &&, já no operador || ele retorna o primeiro verdadeiro
 * 
 * FALSY(SÃO VALORES QUE FINGEM SER FALSOS EM JS)
 * ~false(VALORES LITERAIS)~ 
 * 0
 * '' 
 * ""
 * ``
 * null / undefined
 * NaN
 * qualquer coisa diferente da lista acima, é afirmado como positivo em js
 */

console.log('Wesley' && 0 && 'Moraes');
console.log('Wesley' && NaN && 'Moraes');

console.log("Wesley" && "Claire"); //Uma afirmação verdadeira! Vai retornar apenas o último valor
console.log("Wesley" && '' && "Claire"); // O valor é falsy! Portanto, ele retorna esse valor!

function falaOi(){
    return 'Oi!'
}

let vaiExecutar = true

console.log(vaiExecutar && falaOi()); //Ele para de executar

// || -> Ele quer apenas o verdadeiro para retornar, mas ele vai passando pelos outros e vai aceitando! Mas ele retorna o primeiro verdadeiro
console.log(0 || null || undefined || "Wesley Moraes" || "Chris Redfield" || 23); //Ele retorna o primeiro verdadeiro