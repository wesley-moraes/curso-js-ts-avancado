//import express from 'express';
//const router = new express.Router(); //É uma maneira de fazer o import.

import { Router } from 'express';

import loginRequired from '../middlewares/loginRequired'
import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoController.store)

export default router;
