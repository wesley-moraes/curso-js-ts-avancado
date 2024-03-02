//Map

const pessoas = [
    {id: 3, nome: 'Wes'},
    {id: 4, nome: 'Luh'},
    {id: 5, nome: 'Nat'}
];

/*
const novasPessoas = {};
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas)