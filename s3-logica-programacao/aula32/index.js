//Desustruturação
// Temos o rest operator! ele pega o resto de algo ...nomeVar
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);
console.log(resto);
//Lembrando que temos as matrizes: matriz[i][y] [[1,2,4], [4, 5, 6], [7, 8, 9]]... matrix[1][2] === 5