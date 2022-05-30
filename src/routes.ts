import { Router,Request, Response } from "express";

const CategoriaController = require('./Controllers/CategoriaController');
const ProdutoController = require('./Controllers/ProdutoController');
const router = Router();

router.get('/base', (req: Request, res: Response) => {
  res.json({ message: 'Servidor Ok' })
});

router.get('/listacategorias', CategoriaController.listaCategorias);
router.post('/criacategoria', CategoriaController.criaCategoria);
router.post('/buscacategoria/:id', CategoriaController.consultaCategoria);
router.put('/atualizacategoria/:id', CategoriaController.atualizaCategoria);
router.delete('/removecategoria/:id', CategoriaController.removeCategoria);

router.post('/criaproduto', ProdutoController.criaProduto);
router.post('/atribuiprodutocat', ProdutoController.atribuiProdutoCategoria);
router.put('/atualizaproduto/:id', ProdutoController.atualizaProduto);
router.delete('/removeproduto/:id', ProdutoController.removeProduto);

export {router};