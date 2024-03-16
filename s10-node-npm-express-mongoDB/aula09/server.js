//MONTANDO UM SERVIDOR NODE!

const express = require('express');
const app = express();

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

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar Form</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) =>{
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.listen(3000);

