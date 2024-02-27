const elementos = [
    { tag: 'p', texto: 'Thank u, next!'},
    { tag: 'div', texto: 'For that I say' },
    { tag: 'section', texto: 'I\'m so greatfull' },
    { tag: 'footer', texto: 'for my ex!' }
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    //tagCriada.innerHTML = texto;
    let textoCriado = document.createTextNode(texto);
    //div.appendChild(tagCriada);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);

    console.log(tag, texto, i)
    console.log(typeof tag);
    console.log(typeof texto);
}

container.appendChild(div);