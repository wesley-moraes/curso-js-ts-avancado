import { Router } from 'express'
import userController from '../controllers/UserController'

const router = new Router();

router.post('/', userController.store);

export default router;

/*
Em cada Controller pode ter até 5 métodos
index -> Lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH(quando altera apenas um valor) ou PUT(substitui todo o objeto)
*/
