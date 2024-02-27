//For in
//Ele lê os indices do vetor! E quando for um objeto, ele vai ler as chaves!

const frutas = ['Pera', 'Uva', 'Maçã'];
const frutasObj = {
    fruta: 'pera',
    cor: 'verde'
}

for(let i in frutas){
    console.log(i)
    console.log(frutas[i])
}
for(let chave in frutasObj){

    console.log(chave, frutasObj[chave])
}

//também existe o for of

//for(let i; ...) => Aqui vc tem uso livre do indice (Geralmente com iteráveis (array ou strings))
//for in, é mais simplificado - Retorna o indice ou chave (string, array ou objetos)
// E tem o forEach, que é o valor, indice e o array completo - Retorna o valor em si (iteráveis, arrays ou strings)

frutas.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})