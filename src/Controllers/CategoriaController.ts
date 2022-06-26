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
}

module.exports = new CategoriaController();