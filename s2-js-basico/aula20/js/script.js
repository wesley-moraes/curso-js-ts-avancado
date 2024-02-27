function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*
    form.onsubmit = function(evento){
        console.log("foi")
        evento.preventDefault();
        
    };
    */

    function atualiza(obj){
        resultado.innerHTML += `<p>${obj.nome}, ${obj.sobrenome}, peso: ${obj.peso} e altura: ${obj.altura}</p>`;
    }

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")

        //console.log(nome, sobrenome, peso, altura)

        let obj = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        console.log(obj);
        pessoas.push(obj);

        console.log(pessoas);

        atualiza(obj);
    }


   form.addEventListener("submit", recebeEventoForm)
}

meuEscopo();