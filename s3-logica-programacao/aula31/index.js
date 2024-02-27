/**
 * Em JavaScript, var e let são palavras-chave usadas para declarar variáveis, mas possuem diferenças importantes em relação ao escopo e ao içamento (hoisting).

var:
Escopo de função: As variáveis declaradas com var têm escopo de função, o que significa que elas são visíveis em toda a função em que foram declaradas.
Içamento (hoisting): As declarações de var são içadas (hoisted) para o topo do seu contexto de execução, o que significa que você pode acessá-las antes mesmo de serem declaradas no código. No entanto, apenas a declaração é içada, não a inicialização.
javascript
Copy code
console.log(x); // undefined
var x = 5;
console.log(x); // 5
let:
Escopo de bloco: As variáveis declaradas com let têm escopo de bloco, o que significa que elas são visíveis apenas dentro do bloco em que foram declaradas (bloco é definido por {}).
Não é içada (hoisted) para o topo do bloco. Tentar acessar uma variável let antes de sua declaração resultará em um erro.
javascript
Copy code
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
console.log(x); // 5
Escopo de bloco vs escopo global:

Escopo de bloco: Variáveis declaradas com let e const têm escopo de bloco. Isso significa que elas só podem ser acessadas dentro do bloco em que foram declaradas.
Escopo global: Variáveis declaradas fora de qualquer bloco de código têm escopo global e podem ser acessadas de qualquer lugar no seu código.
javascript
Copy code
let x = 10; // Escopo global

function example() {
  let y = 5; // Escopo de função
  if (true) {
    let z = 3; // Escopo de bloco
    console.log(x); // 10 (acessível)
    console.log(y); // 5 (acessível)
  }
  console.log(z); // ReferenceError: z is not defined (não acessível)
}

example();
console.log(x); // 10 (acessível)
console.log(y); // ReferenceError: y is not defined (não acessível)
console.log(z); // ReferenceError: z is not defined (não acessível)
Em resumo, let é preferível a var na maioria dos casos devido ao seu comportamento mais previsível e seguro em relação ao escopo de bloco e ao içamento.





 */