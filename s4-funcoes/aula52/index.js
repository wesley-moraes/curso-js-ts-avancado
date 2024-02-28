const nome = 'Wesley'; //Escopo Léxico = O JS guarda na memória e se lembra onde a variável foi declarada

function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'Otávio'; //Aqui foi definido no bloco, mas como não utilizo ele neste bloco, então ele respeita o escopo léxico
    falaNome();
}

usaFalaNome(); //O que vai ser imprimido é Wesley, devido o escopo léxico dela
