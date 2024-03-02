//Polimorfismo
//A ideia é fazer métodos de classes se comportarem diferentes dentro de um mesmo método pai!

//Superclass = É a classe mãe, ou a classe pai!
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

//Toda conta vai ter essas 3 opções! Só que a CC vai ter um limite
//E a Poupança não! Você pode ficar negativado


//Toda conta vai ter! 
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente : ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}  
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} - ` +
    `Saldo: R$${this.saldo.toFixed(2)}`
    )
}

const conta1 = new Conta(11, 22, 10);


/*
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(31);
conta1.sacar(10);
//console.log(conta1);
*/

//Podemos especialiar essa super classe!
//CC - Conta Corrente
function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const cc = new CC(11, 22, 0, 100);


cc.depositar(10);
cc.sacar(110);


//Conta Poupança
function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
    
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(12, 33, 0);

cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

//Fazer métodos de modo diferente sendo elas filhas de um mesmo pai! Isso é o polimorfismo!