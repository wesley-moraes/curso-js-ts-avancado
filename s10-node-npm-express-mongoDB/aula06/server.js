//MONTANDO UM SERVIDOR NODE!

const express = require('express');
const app = express();

//CRUD -> Create, Read, Update, Delete
//         POST,  GET,   PUT,   DELETE

//http://meusite.com/ <- GET -> Entregue a página
//É sobre rotas, o express. ELe faz o caminho do site
//E redireciona, por exemplo, para um http://meusite.com/sobre.

//Rota e requisição
//Na internet o cliente faz uma requisição
//E o servidor faz uma resposta
//Req -> Request -> Requisição
//Res -> Response -> Resposta
app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) =>{
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato conosco!');
});

app.listen(3000);

