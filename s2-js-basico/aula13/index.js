let umaString = " um \"texto\" aqui"; //As barras invertidas faz escapar o texto
let umaString2 = " um \\texto aqui"; //A barra escapa a outra barra

//console.log(umaString2)
//console.log(umaString[2]);//recupera o caracter.
//console.log(umaString.charAt(5));

/**
    * console.log(umaString.indexOf(" aqui"));
    * console.log(umaString.indexOf("texto", 3)); //É para pesquisar a partir de tal caracter!
    * console.log(umaString.lastIndexOf("texto")); //Procura de trás para frente

 */
//indexOf - serve para saber onde começa a palavra especifica!

let novoTexto = "um texto";

//console.log(novoTexto.match(/[a-z]/));
console.log(novoTexto.search(/x/)); //Diferente do indexOf, ele aceita expressões regulares
console.log(novoTexto.replace("um", "Outra"));
console.log(novoTexto.replace(/um/, "Outra")); //Por expressão regular!

console.log(novoTexto.split(" "));
console.log(novoTexto.toUpperCase());
console.log(novoTexto.toLowerCase());