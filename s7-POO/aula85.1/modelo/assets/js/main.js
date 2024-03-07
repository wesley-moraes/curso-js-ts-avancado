class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
        eventos(){
            this.formulario.addEventListener('submit', e => {
                this.handleSubmit(e);
            })
        }

        handleSubmit(e){
            e.preventDefault();
            //console.log('Formulário não eviado...');
            const camposValidos = this.camposSaoValidos();
            const senhasValidas = this.senhasSaoValidas();

            console.log('Campos validos' + camposValidos + "Senhas validas" + senhasValidas)

            if(camposValidos && senhasValidas){
                alert('finished!');
            }
        }
        
        senhasSaoValidas(){
            let valid = true;

            const senha = this.formulario.querySelector('.senha');
            const repetirSenha = this.formulario.querySelector('.repetir-senha');

            if(senha.value !== repetirSenha.value){
                valid = false;
                this.criaErro(senha, "Campos senha e repetir senha precisam ser iguais");
                this.criaErro(repetirSenha, "Campos senha e repetir senha precisam ser iguais");
            }

            if(senha.value.length < 6 || senha.value.length > 12){
                valid = false;
                this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres");
            }

            return valid;

        }

        camposSaoValidos(){
            let valid = true; //Assumindo que os campos são validos de cara
            //E o que é retornado na classe camposSaoValidos

            //Para não repetir a exebição de erro e tbm remover se eu colocar
            for(let errorText of this.formulario.querySelectorAll('.error-text')){
                errorText.remove();
            };

            for(let campo of this.formulario.querySelectorAll('.validar')){
                const label = campo.previousElementSibling.innerHTML; //Recuperando o label
                //Para ficar certinho e não ser manual o formulário
                
                if(!campo.value){
                    this.criaErro(campo, `${label} não pode estar em branco`);
                    valid = false;
                }

                if(campo.classList.contains('cpf')){
                    if(!this.validaCPF(campo)) valid = false;
                }

                if(campo.classList.contains('usuario')){
                    if(!this.validaUsuario(campo)) valid = false;
                }
            }

            return valid;
        }

        validaUsuario(campo){
            const usuario = campo.value;
            let valid = true;

            if(usuario.length < 3 || usuario.length > 12){
                this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
                valid = false;
            }
            if(!usuario.match(/[a-zA-Z0-9]+/g)){
                this.criaErro(campo, "Nome de usuário precisa conter apenas letras e números.")
                valid = false;
            }
            return valid;
            console.log("Valida usuário: " + valid);
        }

        validaCPF(campo){
            const cpf = new ValidaCPF(campo.value);

            if(!cpf.valida()){
                this.criaErro(campo, 'CPF Inválido');
                return false;
            }
            //console.log("Valida usuário: " + valid);
            return true;
        }

        criaErro(campo, msg){
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text');
            campo.insertAdjacentElement('afterend', div);

        }

    }

const valida = new ValidaFormulario();