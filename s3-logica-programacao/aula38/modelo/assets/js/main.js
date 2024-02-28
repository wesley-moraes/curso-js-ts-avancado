const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
console.log( ps);

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

console.log(backgroundColorBody);

for(let p of ps){
    //Eles só fizeram por camelCase
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
    //console.log(p)
}