import { Router,Request, Response } from "express";
const ProdutoModel = require('../Models/Produto');
const CategoriaModel = require('../Models/Categoria');

class ProdutoController{
  async criaProduto(req:Request, res:Response){
    try {
      const produto = await ProdutoModel.create(req.body);
      return res.send(produto);
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }

  async listaProdutos(req:Request, res:Response){
    const produto = await ProdutoModel.find();
    return res.send(produto);
  }
}

module.exports = new ProdutoController();