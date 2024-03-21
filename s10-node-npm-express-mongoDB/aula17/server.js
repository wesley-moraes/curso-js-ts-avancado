//MONTANDO UM SERVIDOR NODE!

const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middleware/middleware');
const helmet = require('helmet');
const csrf = require('csurf');

//dotenv - ajuda na questao de segurança dos dados
require('dotenv').config();



//conexão com a base de dados
const mongoose = require('mongoose')
//const connectionString = "";
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() =>{
    //console.log('Conectei a bse de dados!')
    app.emit('pronto');
})
.catch(e =>{console.log(e)});

const session = require('express-session'); //salva a sessão na memória
const MongoStore = require('connect-mongo');
const flash = require('connect-flash'); 

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
    express.urlencoded(
        {
            extended: true
        }
    )
)



//Uso estático -> São os arquivos finais! Eles ficam dentro da pasta public!
//app.use(express.static('./public'));
//Isso aqui é um middleware
app.use(express.static(path.resolve(__dirname, 'public')));

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



