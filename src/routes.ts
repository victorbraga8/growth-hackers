import { Router,Request, Response } from "express";
const CategoriaController = require('./Controllers/CategoriaController');
const ProdutoController = require('./Controllers/ProdutoController');
const router = Router();

router.post("/criacategoria", CategoriaController.criaCategoria);
router.get("/listacategorias", CategoriaController.listaCategorias);

router.post("/criaproduto", ProdutoController.criaProduto);
router.get("/listaprodutos", ProdutoController.listaProdutos);

export {router};