//import express from 'express';
//const router = new express.Router(); //É uma maneira de fazer o import.

import { Router } from 'express';
import alunoController from '../controllers/AlunoController';


const router = new Router();

router.get('/', alunoController.index)

export default router;
