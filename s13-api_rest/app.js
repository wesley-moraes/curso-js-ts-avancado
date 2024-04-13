import dotenv from 'dotenv'
dotenv.config();

import './src/database'; //Este arquivo já vai ser executado quando for machamdo
import express from 'express';
import homeRoutes from './src/routes/homeRoutes'



class App {
  constructor() { //Sempre que eu instanciar a classe, ela vai ser executada
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ //Base de configuração para usar o express
      extended: true
    }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes)
  }
}

export default new App().app; //Exportando apenas o app, já instanciando a classe.
