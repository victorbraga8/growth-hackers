const CategoriaModel = require('../Models/Categoria');

class CategoriaController{
  async criaCategoria(req:any, res:any){
    try {
      const categoria = await CategoriaModel.create(req.body);
      return res.json(categoria);
    } catch (error:any) {
      return res.json(error.message)
    }
  }
  async consultaCategoria(req:any, res:any){
    try {
      const categoria = await CategoriaModel.findById(req.params.id);
      return res.json(categoria);
    } catch (error:any) {
      return res.json(error.message);
    }
  }
}

module.exports = new CategoriaController();
