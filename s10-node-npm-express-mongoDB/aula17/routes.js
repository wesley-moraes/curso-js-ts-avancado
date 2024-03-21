//o trabalho deste arquivo é apenas de fazer o roteamento!

const express = require('express');
const route = express.Router(); //Utilizar as rotas
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

//O express é baseado inteiro em middlewares
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas para contat
route.get('/contato', contatoController.paginaInicial)

module.exports = route;