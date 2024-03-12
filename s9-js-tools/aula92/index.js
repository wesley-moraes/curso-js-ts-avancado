//O babel serve para converter todo o arquivo para que fique
//compatível com todos os outros navegadores. É um transpilador
//

const nome = "Luiz";
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj);