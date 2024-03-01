//2 funções que são relacionadas a chave do objeto
//defineProperty - defineProperties (congela coisas em especifica)
//Altera as prorpriedades 

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    this.estoque = estoque;
    let novaVariavel = estoque;

    //QUando se trabalhar com get e set é ideal criar uma nova variavel


    /*
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Valor da chave
        writable: false, //Pode alterar o valor?
        configurable: true //Pode apgar ou reconfigurar?

    });
    */

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        //value: estoque, //Valor da chave
        //writable: false, //Pode alterar o valor?
        get: function(){
            return novaVariavel;
        },
        set: function(valor){
            if(typeof valor !== "number"){
                novaVariavel = valor;
            }
            
        },
        configurable: true //Pode apgar ou reconfigurar?

    });

    /*
    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome,
            writable: false, 
            configurable: true
        },
        preco: {
            enumerable: true, 
            value: preco,
            writable: true, 
            configurable: true
        }
    })
    */
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1){
    console.log(chave, p1[chave])
}

p1.estoque = 'O valor que eu quero';
console.log(p1.estoque)

//Por format factory get e set
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}

const p4 = criaProduto();
p4.nome = 'Qualquer coisa n'; //Atribuição set!
console.log(p4.nome);