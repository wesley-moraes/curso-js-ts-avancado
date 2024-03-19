//MONTANDO UM SERVIDOR NODE!

const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const meuMiddleware = require('./src/middleware/middleware');

//http://facebook.com/profiles/
//URL Params!
//
//Params -> Partes que vem na rota da url (tipo usuario1)
//Query -> QueryString. Algoq ue vem na barra mesmo. (tipo /?chave=valor1&chave2=valor2)


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

//Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Próprios Middleware
app.use(meuMiddleware);
app.use(routes); //Aqui é para usar as rotas! Deixar visível para ser usado

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

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});

