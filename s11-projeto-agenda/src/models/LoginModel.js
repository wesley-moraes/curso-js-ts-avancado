const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
    
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
        
    }

    async register(){
        
        this.valida();
        if(this.errors.length > 0) return;

        try{
            this.user = await LoginModel.create(this.body);
        }catch(e){
            console.log(e);
        }
        
    }

    valida(){
        //validacao de campos
        //O e-mail precisa ser válido
        if(!validator.isEmail(this.body.email)) this.errors.push('e-mail invalido') //Se não for um email valido
        if(this.body.password.length <3 || this.body.password.length > 50){
            this.errors.push('A senha precisa ter entre 3 a 50 caracteres. ');
        }
        //A senhra precisa ter entre 3 a 50 caracteres
    }

    cleanUp(){ //É pra garantir que tudo seja uma string
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = ''; //E o que não for, recebe uma string vazia
            }
        }
        
        this.body = { //Garantindo que os objetos terão apenas os campos que eu quero
            email: this.body.email,
            password: this.body.password
        }
    };
    
}

module.exports = Login;