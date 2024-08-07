//import express from 'express';
//const router = new express.Router(); //É uma maneira de fazer o import.

import { Router } from 'express';
import homeController from '../controllers/HomeController';


const router = new Router();

router.get('/', homeController.index)

export default router;
