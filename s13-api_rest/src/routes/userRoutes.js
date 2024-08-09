//import express from 'express';
//const router = new express.Router(); //É uma maneira de fazer o import.

import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';


const router = new Router();

//Não utilizado
router.get('/', userController.index); //Lista Usuários
router.get('/:id', userController.show); //:id -> É um parâmetro



router.post('/', userController.store); //Lista usuários
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * index -> Lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> Apaga um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH ou PUT
 */
