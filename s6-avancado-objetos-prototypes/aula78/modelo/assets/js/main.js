//Validação de CPF

//const cpf = prompt('Insira seu CPF: ');

const cpfTemp = "705.484.450-52"; //070.978.720-03




function validaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

validaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencial()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    console.log(digito2);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
    //console.log(novoCpf);
    //console.log(digito1);
    

    return true;
};

validaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        //console.log(regressivo, val, regressivo * val);
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
    //console.log(digito)

    //console.log(digito)
    
}

validaCPF.prototype.isSequencial = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new validaCPF("111.111.111-11");
console.log(cpf.valida())
//cpf.valida();