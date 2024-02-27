
const data = new Date();
console.log(data.toString());

console.log('Data', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', zeroEsquerda(data.getSeconds()));

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
//data formatada - para formatar é só concatenar tudo! Não tem nada de especial