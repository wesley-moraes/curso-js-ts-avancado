import dotenv from 'dotenv';
dotenv.config();

import './src/database'; //Ja executa automaticamente

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

class App {
  constructor(){
    //Sempre que instância essa classe, tudo isso vai ser executado
    this.app = express();
    this.middleares();
    this.routes();
  }

  middleares(){
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app; //Isso exporta a classe já instânciada. Em outras palavras, naõ pre precisa instânciar ela quando for chadama. Na verdade, já é pra executar o app.
