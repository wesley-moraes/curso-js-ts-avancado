//import express from 'express';
//const router = new express.Router(); //É uma maneira de fazer o import.

import { Router } from 'express';
import userController from '../controllers/UserController';


const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show); //:id -> É um parâmetro
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/**
 * index -> Lista todos os usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> Apaga um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH ou PUT
 */
