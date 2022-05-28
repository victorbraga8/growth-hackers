import { Router,Request, Response } from "express";

const CategoriaController = require('./Controllers/CategoriaController');
const router = Router();

router.get('/base', (req: Request, res: Response) => {
  res.json({ message: 'Servidor Ok' })
});

router.post('/criacategoria', CategoriaController.criaCategoria);
router.post('/buscacategoria/:id', CategoriaController.consultaCategoria);

export {router};