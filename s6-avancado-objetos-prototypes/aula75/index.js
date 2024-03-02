//Toda função construtora tem um prototype
//E ele vai imbutido como uma chave __proto__ : Object.prototype
//Propriedade Proto!

const objA = {
    chaveA : 'A'
}

const objB = {
    chaveB : 'B'
    //__proto__: objA 
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveA);
//Aqui é uma cadeia de código! O ObjC acessa o B, e o B acessa o A
//Isso é bom para reutilizar códigos!

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(100);
//p1.aumento(100);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(10); //Eu quis usar aqui a função de aumentar o valor do produto
//Só que para isso, eu preciso referenciar o p2 para acessar as propriedades de Produto
// E faço isso com o Object.setPrototypeOf()
//Assim consigo utilizar os métodos de Produto

console.log(p2)