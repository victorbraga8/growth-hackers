import { Router,Request, Response } from "express";
const CategoriaController = require('./Controllers/CategoriaController');
const router = Router();

router.post("/criacategoria", CategoriaController.criaCategoria);

export {router};