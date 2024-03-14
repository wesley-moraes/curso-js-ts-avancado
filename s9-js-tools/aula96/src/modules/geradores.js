//console.log(String.fromCharCode(33));

const rand = (min, max) => Math.floor(Math.random() * (max-min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~-^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

//console.log(geraNumero());

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    qtd = Number(qtd);
    for(let i = 0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula()); //Verificação de curto-circuito
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
    //Join - para converter par auma string, e deixar de ser array
    //slice para resumir o tamanho do caracter que queremos
}

geraSenha(10, true, true, true,true);