const request = obj =>{

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
async function carregaPagina(el){
    const href = el.getAttribute('href');
    console.log(href);

    const objConfig = {
        method: 'GET',
        url: href
    };

    const response = await request(objConfig);
    carregaResultado(response);

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