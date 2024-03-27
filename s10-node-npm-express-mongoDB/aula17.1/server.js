//MONTANDO UM SERVIDOR NODE!
//
const express = require('express'); //É o framework para criação de apps com Node.js
const app = express(); //Usando o express
const routes = require('./routes'); // Pagina inicial, Home
const path = require('path'); //Utilizado para trabalhar com arquivos e diretórios
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middleware/middleware'); // Middleware são muito usados pelo express
const helmet = require('helmet');
const csrf = require('csurf'); //É um token! Para nenhum site externo poste coisas na nossa base 

//dotenv - ajuda na questao de segurança dos dados
require('dotenv').config(); //Está relacionado ao arquivo .env. Ele cria um ambiente de desenvolvimento que não vai para o seu repositorio
//E o .env é configurado também direto nos servidor.



//conexão com a base de dados
const mongoose = require('mongoose'); //Quem modela a base de dados
//const connectionString = "";
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() =>{
    //console.log('Conectei a bse de dados!')
    app.emit('pronto');
})
.catch(e =>{console.log(e)});

const session = require('express-session'); //salva a sessão na memória!
const MongoStore = require('connect-mongo'); //Salva na base de dados
const flash = require('connect-flash'); //exibe mensagens apenas uma vez e depois são auto destruidas

//http://facebook.com/profiles/
//URL Params!
//
//Params -> Partes que vem na rota da url (tipo usuario1)
//Query -> QueryString. Algoq ue vem na barra mesmo. (tipo /?chave=valor1&chave2=valor2)

//helmet pode ser executado em qualquer momentp
app.use(helmet());

//Isso aqui é para permitir o uso do POST.
//Para real envio de formulário
//Isso aqui trata o Post! Se não usar, vai dar como undefined
app.use(
    express.urlencoded( //Pode inserir formulários nessa aplicação
        {
            extended: true 
        }
    )
)

app.use(express.json()); //

//Uso estático -> São os arquivos finais! Eles ficam dentro da pasta public!
//app.use(express.static('./public'));
//Isso aqui é um middleware
app.use(express.static(path.resolve(__dirname, 'public'))); //Imagens, css, arquivos... Coisas que podem ser acessadas direamente
//Acessa diretamente esses arquivos

//Session
const sessionOptions = session({
    secret: 'QUalquer coisa que ninguem sabe o que e',
    //store: new MongoStore({mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING})
});

app.use(sessionOptions);
app.use(flash());



//Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
//Próprios Middleware
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes); //Aqui é para usar as rotas! Deixar visível para ser usado

app.on('pronto', ()=>{
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});

/*
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome"> <br>
            Outro Campo: <input type="text" name="outroCampo" /> <br>
            <button>Enviar Form</button>
        </form>
    `);
});
*/

/*
app.get('/testes/:idUsuarios?/:parametro?', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) =>{
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})
*/



