const alunos = ["Maria", "Luiz", "Joao"]

//Unshift adiciona no começo
alunos.unshift("Chris");
alunos.unshift("Alexandra")

//Push adiciona no fim
alunos.push("Wesley");
alunos.push("Fabio");

console.log(alunos);

//Pop remove no final!
let removido = alunos.pop()
console.log(removido);
console.log(alunos);

//delete alunos[1]
console.log(alunos.slice(0, 3));

console.log(typeof alunos); //Array é um objeto