//o trabalho deste arquivo é apenas de fazer o roteamento!

const express = require('express');
const route = express.Router(); //Utilizar as rotas
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController')

//Rota da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas para contat
route.get('/contato', contatoController.paginaInicial)

module.exports = route;