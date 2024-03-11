const request = obj =>{


    console.log('fetch API');
    //O Fetch já retorna, por padrão, uma promisse
    fetch('pagina1.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error ('Erro 404 Nosso');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.log(e))
    /*
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        //Aqui são callbacks antigas! Método moderno acima com promisses
        xhr.addEventListener('load', () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);

            }else{
                reject(xhr.statusText);
            }
        });
    })
    */

    /*
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    //Aqui são callbacks antigas! Método moderno acima
    xhr.addEventListener('load', () =>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);

        }else{
            obj.error(xhr.statusText);
        }
    });
    */


}

document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

//function carregaPagina(el){

// trabalhando com fetch API
//async function carregaPagina(el){
async function carregaPagina(el){

    try{
    const href = el.getAttribute('href');
    const response = await fetch(href);
    
    if(response.status !== 200) throw new Error('Erro 4-4!');
    
    const html = await response.text();
    carregaResultado(html);
    }catch(e){
        console.log(e);
    }

    //Uncaught é um erro que naõ foi tratado
    
    /*
    fetch(href)
    .then(response => {
        if(response.status !== 200) throw new Error('Erro 4-4!');
        return response.text();
    })
    .then(html => carregaResultado(html))
    .catch(e => console.log(e))
    //Convertendo isso acima para asyn e await
    */

    /*
    console.log(href);

    const objConfig = {
        method: 'GET',
        url: href
    };
    

    const response = await request(objConfig);
    carregaResultado(response);
    */

    /*
    request(objConfig).then(response => {
        carregaResultado(response);
    }).catch(error => console.log(error));
    */


    /*
    request({
        method: 'GET',
        url: href,
        
        //Remove os Callbacks
        success(response){
            carregaResultado(response)
        },
        error(errorText){
            console.log(errorText)
        }
        
       
    });
    */
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


