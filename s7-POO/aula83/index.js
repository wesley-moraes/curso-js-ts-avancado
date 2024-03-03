class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;

        if (this.ligado) {
            console.log(this.nome + " já ligado");
            return;
        }

    }

    desligar() {
        this.ligado = false;

        if (!this.ligado) {
            console.log(this.nome + " já desligado");
            return;
        }

    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.desligar();
//d1.desligar();
console.log(d1);

class Smartphone extends DispositivoEletronico{ //Aqui eu já tenho tudo o que tem na classe superior
    constructor(nome, cor, modelo){
        super(nome);//Da classe pai

        this.cor = cor;
        this.modelo = modelo;
    }
    
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);