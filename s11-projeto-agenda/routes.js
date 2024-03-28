//o trabalho deste arquivo é apenas de fazer o roteamento!

const express = require('express');
const route = express.Router(); //Utilizar as rotas
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

//O express é baseado inteiro em middlewares
route.get('/', homeController.index);

//Rotas de Login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;