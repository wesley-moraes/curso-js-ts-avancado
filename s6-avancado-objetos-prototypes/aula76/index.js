//Produto -> Aumento de preco e desconto
//Camiseta = cor, caneca material
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.aumento = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call();
}

// Apenas... Não utilizado