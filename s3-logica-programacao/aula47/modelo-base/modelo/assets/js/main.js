function clockTower(){
    function getTimeFromSeconds(segundos){
        const data = new Date(segundos * 1000);
    
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    //Função para deixar tudo em um único lugar
    document.addEventListener('click', function(e){
        const el = e.target;
    
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer); //Não pode ter varios timers brigando pelos segundos
            iniciaRelogio();
        }
    
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        
        if(el.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            segundos = 0;
            relogio.innerHTML = '00:00:00';
        }
    
        console.log(e.target); //Target é o próprio elemento que estou clicando na página
    });
    
    console.log(getTimeFromSeconds(10));
    
    const relogio = document.querySelector(".relogio");
    
    /*
    //Já estou pegando eles nos ifs
    const iniciar = document.querySelector(".iniciar");
    const pausar = document.querySelector(".pausar");
    const zerar = document.querySelector(".zerar");
    */
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000)
    }
    
    
    /**
    iniciar.addEventListener('click', function(e){
        relogio.classList.remove('pausado');
        clearInterval(timer); //Não pode ter varios timers brigando pelos segundos
        iniciaRelogio();
    })
    
    pausar.addEventListener('click', function(e){
        clearInterval(timer);
        relogio.classList.add('pausado')
       
    })
    
    zerar.addEventListener('click', function(e){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
    })
    */
}

clockTower();