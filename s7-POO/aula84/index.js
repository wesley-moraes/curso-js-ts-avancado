//Métodos estáticos
//Posso acessar apenas dentro da classe

class ControleRometo{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância - é executada por instância
    aumentarVolume(){
        this.volume += 2;
    }
    
    diminuirVolume(){
        this.volume -= 2;
    }

    //Método estático
    static trocaPilha(){
        console.log('Ok, vou trocar');
    }
}

const controle1 = new ControleRometo('LG');

controle1.aumentarVolume();
console.log(controle1);

//Por instância eu não consigo acessar esse método
//controle1.trocaPilha();
//Para isso tenho que acessar através da classe.
ControleRometo.trocaPilha(); //Eu não tenho um new, então eu
// não tenho acesso as outras partes da instância

//Um exemplo
console.log(Math.random()); //Eu não chamo New! Eu não tenho 
//dados de instância! Eu chamo a funcao estática direto!
