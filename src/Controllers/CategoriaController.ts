import { Router,Request, Response } from "express";
const Helpers = require('../Helpers/Helpers');
const Categoria = require('../Models/Categoria');

class CategoriaController{
  async criaCategoria(req:Request, res:Response){
    try {
      const categoria = await Categoria.create(req.body);
      return res.send(categoria);
    } catch (error:any) {
      return res.json(error.message);
    }
  }

  async consultaCategoria(req:Request, res:Response){
    try {
      const categoria = await Categoria.findById(req.params.id).populate('produtos');
      return res.send(categoria);
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }

  async listaCategorias(req:Request, res:Response){
    try {
      const categoria = await Categoria.find().populate('produtos');
      return res.send(categoria);
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }

  async removeCategoria(req:Request, res:Response){
    try {
      const categoria = await Categoria.findById(req.params.id);
      if(categoria['produtos'].length >= 1){
        res.status(400).send({"Mensagem":`Categoria ${categoria['titulo']} não pode ser removida, pois possui produtos`})
      }else{
        const categoria = await Categoria.findByIdAndRemove(req.params.id);
        return res.send({"Mensagem":`Categoria ${req.params.id} removida.`});
      }  
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }

  async atualizaCategoria(req:Request, res:Response){
    try {
      const categoriaId = req.params.id;
      const atualizacao = req.body;
      const categoria = await Categoria.findByIdAndUpdate(categoriaId, atualizacao, {new:true});
      return res.send(categoria); 
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }
}

module.exports = new CategoriaController();