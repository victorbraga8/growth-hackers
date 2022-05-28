const ProdutoModel = require('../Models/Produto');
const CategoriaProdutoModel = require('../Models/Categoria');

class ProdutoController{
  async criaProduto(req:any, res:any){
    try {
      const produto = await ProdutoModel.create(req.body);
      return res.json(produto);
    } catch (error:any) {
      return res.json(error.message)
    }
  }
  async atribuiProdutoCategoria(req:any, res:any){
    try {
      const {produtoId, categoriaId} = req.body;
      const produto = await ProdutoModel.findById(produtoId);
      const categoria = await CategoriaProdutoModel.findByIdAndUpdate(categoriaId, { produtos:produto}, {new: true});
      return res.send(categoria);
    } catch (error) {
      
    }
  }
}

module.exports = new ProdutoController();