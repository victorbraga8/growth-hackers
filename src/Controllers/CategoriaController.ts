const CategoriaModel = require('../Models/Categoria');
const ProdutoCategoriaModel = require('../Models/Produto');

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
      return res.status(400).send({'error':error.message})
    }
  }

  async listaCategorias(req:any, res:any){
    try {
      const categoria = await CategoriaModel.find().populate('produtos');
      return res.json(categoria);
    } catch (error:any) {
      return res.status(400).send({'error':error.message})
    }
  }

  async removeCategoria(req:any, res:any){
    try {
      const categoria = await CategoriaModel.findByIdAndRemove(req.params.id);
      return res.send({"Mensagem":`Categoria ${req.params.id} removida.`});
    } catch (error:any) {
      return res.status(400).send({'error':error.message})
    }
  }

  async atualizaCategoria(req:any, res:any){
    const categoriaId = req.params.id;
    const atualizacao = req.body;

    const categoria = await CategoriaModel.findByIdAndUpdate(categoriaId, atualizacao, {new:true});
    return res.send(categoria);

  }
}

module.exports = new CategoriaController();
