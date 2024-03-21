//o trabalho deste arquivo é apenas de fazer o roteamento!

const express = require('express');
const route = express.Router(); //Utilizar as rotas
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')


//O express é baseado inteiro em middlewares

/*
//Middlewares são as funlões que vovcê vai colocando.
function meuMiddleware(req, res, next){
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next(); //se eu não colocar esse next, ele não cama
    //o próximo middleware, que no caso é o homeControoler.paginaInicial
}
*/


//Rota da Home
//route.get('/', meuMiddleware, homeController.paginaInicial);
route.get('/', homeController.paginaInicial);
/*
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
    console.log('Ainda estou aqui...')
});
*/
route.post('/', homeController.trataPost);

//Rotas para contat
route.get('/contato', contatoController.paginaInicial)

module.exports = route;