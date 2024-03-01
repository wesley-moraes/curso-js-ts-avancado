const produto = {nome: 'Caneca', preco: 1.8}
const outraCoisa = {...produto, outroArumento: 'Recebe'}; //Esta é uma maneira de seprar o aponamento na memoria

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);

//Obj Assign, 
//const caneca = Object.assign({}, {material: 'porcelana'});

//Um jeito muito manual é atribuir manualmente, copiando um objeto par aoutro objeto
//const caneca = {nome: produto.nome, preco : produto.preco}

//Object.keys(); ->Iterar sobre as chaves!
//Object.values(produto); -> Itera sobre os valores
//Object.entries(produto); -> Itera tudo, retornando arrays
//Object.freeze() -> congela o objeto, não se pode alterar mais ele
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto)
