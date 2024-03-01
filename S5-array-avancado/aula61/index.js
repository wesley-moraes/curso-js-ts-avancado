//Filter, map, reduce

//Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];


//FILTER
//Sempre retorna um array, com a mesma quantidade de elementos ou menos
//Ele retorna um novo array!
//function callbackFilter(valor, indice, array){
    
    /*
    if(valor > 10){
        return true
    }else{
        return false;
    }
    */
    //A mesma coisa é esse código abaixo:
//    return valor > 10;

//}

//Tem a opção acima de montar tudo separado, assim como criar uma funcao anonima
//const numerosFiltrados = numeros.filter(callbackFilter);
//Este é um modo super resumido de escrever a mesma funcao
//const numerosFiltrados = numeros.filter(valor => valor > 10); //Quando se tem apenas uma linha o return é implicito
//console.log(numerosFiltrados)

//trabalhando com os outros parametros
/*
const numerosFiltrados = numeros.filter((valor, indice, array ) => { 
    console.log(valor, indice, array)
    return valor > 10
});
*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 100},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

/*
const pessoasComNomeGrande = pessoas.filter((obj) => {
    return obj.nome.length >= 7;
});
*/
//Reduzindo a função!
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);
const pessoasA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasMaisVelhas);
console.log(pessoasA);

//MAP
//Altera os valores do array!
//Ela tem a mesma estrutura que o filter. O que muda é que no 
//retorno final a gente muda os valores do array

const numerosMultiplicados = numeros.map(valor => valor * 2);
console.log(numerosMultiplicados);

//Retornando apenas o nome
const nomesApenas = pessoas.map(nome => nome.nome); 
console.log(nomesApenas);

//Retornando apenas as idades em objeto
const idades = pessoas.map(obj => ({idade : obj.idade}));
console.log(idades);

//Inserind um id para cada pessoa no objeto
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj}; //Faz isso para não alterar o original
    newObj.id = indice + 1;
    return newObj;
});

console.log(pessoas);
console.log(comIds);

//REDUCE
//Reduz o array em um único elemento! Eu trago um valor só!
//Só que ele é muito versátil!

/*
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    //console.log(acumulador);
    return acumulador;
}, 0); //Valor inicial para o acumulador! É um valor que é sempre retornado! 

console.log(total);
//Reduce = Reduzir o array a único elemento
*/

//retorne apenas os multiplos de 2
const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0){
        acumulador.push(valor);
    }
    //console.log(acumulador);
    return acumulador;
}, []); //Iniciando com um array vazio para guardar infos nele!
//Só que neste caso, se eu não iniciar com zero, ele soma o 5! 
//Portanto, não se esqueça: Inicie com zero caso queira fazer contas!
console.log(total);

/*
//Verificando quem é a mais velha no array de objetos
const maisVelha = pessoas.reduce(function(acumulador, valor){
    console.log(valor);
    if(acumulador.idade > valor.idade) return acumulador
    return valor //Este return é como se assumisse o novo acumulador
});//Neste caso, se eu não passo nenhum parametro para o acumulador,
//Ele inicia pegando o meu primeiro objeto! E é essa a intenção
console.log(maisVelha)
*/

const maisVelha = pessoas.reduce((acumulador, valor) =>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
});

console.log(maisVelha);

//Unindo tudo!
//Retorne a soma do dobro de todos os pares!
// Filter -> Pares
// Dobrar os valores
// Reduzir a coma

/*
//Função sendo reduzida para arrow function
const resultado = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2
}).reduce(function(acumulador, valor){
    return acumulador + valor;
}, 0);
*/

const resultado = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);


console.log("UNINDO TUDO!")
console.log(resultado);