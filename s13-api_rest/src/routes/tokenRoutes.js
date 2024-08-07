import { Router } from 'express';
import tokenController from '../controllers/TokenController';


const router = new Router();

router.post('/', tokenController.store) //Cria uma nova sessao, um novo token

export default router;
