//Todo arquivo JS é um módulo específico. Então ele tem seu
//Próprio mundinho.
//Não se trabalha tudo em um único arquivo JS

//src - Código fonte! É como se ficasse tudo solto aqui
//Para depois ser um bundle! Tudo concentrado.

//É tudo o que o meu usuario vai ver



const path = require('path'); //

//Se eu não exporto ele, ele fica apenas nesse mundo
module.exports = {
    mode: 'production', //Development - fica tudo inteiro OU production - minifica tudo
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        //Isso, acima, resolve as questões de caminhos absolutos
        //__dirname -> variável do node!
        //O Resolve não fica utlizando as barras, porque isso muda dependendo
        //dependendo do SO que eu uso.
        filename: 'bundle.js' //Contém todos os arquivos da aplicação
    },
    module: {
        rules: [
            {
                exclude: /node_modudes/,
                test: /\.js$/, //Regex! É JS! $ -> Significa que são os arquivos js
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']

                    }
                }
            }
        ]
    },
    devtool: 'source-map'//Ele permite mostrar as linhas de código exatos
    //Dentro do bundle
}