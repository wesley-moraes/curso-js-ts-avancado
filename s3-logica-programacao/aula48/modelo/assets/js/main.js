const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

//O Form, quando se tecla o BTN enter, ele ativa a função do form!

function criaLi() {
    const li = document.createElement('li');
    return li
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar essa tarefa');
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    console.log(textoInput)
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    //salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
})

/*
Opcional, salvar local storage

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    console.log(listaDeTarefas)

    const tarefasJSON = JSON.stringify(listaDeTarefas)

}
*/