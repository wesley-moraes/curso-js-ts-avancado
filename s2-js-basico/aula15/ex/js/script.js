numero = Number(prompt("Insira um numero"));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}</p>` ;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero) ? "É inteiro" : "Não é inteiro"} </p>` ;
texto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)} </p>` ;
texto.innerHTML += `<p>Arredonda para baixo: ${Math.floor(numero)} </p>` ;
texto.innerHTML += `<p>Arredonda para cima: ${Math.ceil(numero)} </p>` ;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>` ;




