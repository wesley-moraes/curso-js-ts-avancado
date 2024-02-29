//Funções Geradoras são funções que são executadas em partes!

/*
function* geradora1(){ 
    //Código Qualquer
    yield 'valor 1';
    //Código Qualquer
    yield 'valor 2';
    //Código Qualquer
    yield 'valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
*/

/*
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
*/

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}