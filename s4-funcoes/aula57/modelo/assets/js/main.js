function criaCalculadora() {

    return {
        display: document.querySelector('.display'),
        //btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            console.log(this.display)
            this.display.classList.add('Adiciona')
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                  this.realizaConta();
                }
              });
            /*
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.realizaConta();
              }
            });*/
          },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta Invalida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('CONTA INVÁLIDA!');
                return
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                //Fix ENTER
                this.display.focus();

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();