//IIFE -> Imediately invoked function expression
//São funções que sao chamadas imediatamente, e são protegidas pelo seu bloco! 
//Protege do escopo global
(function(idade, peso, altura){
    const sobrenome = "Moraes"

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    
    function falaNome(){
        console.log(criaNome("Wesley"));
    } 

    falaNome();
    console.log(idade, peso, altura)

})(29, 51, 165);