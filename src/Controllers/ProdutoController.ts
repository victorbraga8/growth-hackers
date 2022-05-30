const ProdutoModel = require('../Models/Produto');
const CategoriaProdutoModel = require('../Models/Categoria');

class ProdutoController{
  async criaProduto(req:any, res:any){
    try {
      const produto = await ProdutoModel.create(req.body);
      return res.send(produto);
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }

  async atualizaProduto(req:any, res:any){
    try {
      const produtoId = req.params.id;
      const atualizacao = req.body;
      const produto = await ProdutoModel.findByIdAndUpdate(produtoId, atualizacao, {new:true});
      return res.send(produto);
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }

  async removeProduto(req:any, res:any){
    try {
      const categoria = await ProdutoModel.findByIdAndRemove(req.params.id);
      return res.send({"Mensagem":`Produto ${req.params.id} removido.`});
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }

  async atribuiProdutoCategoria(req:any, res:any){
    try {
      const {produtoId, categoriaId} = req.body;
      const produtoReq = [];
      const produtoArr = [];

      for(let i=0; i<= produtoId.length-1; i++){
        const produto = await ProdutoModel.findById(produtoId[i]);
        produtoReq.push(produto);
      }
      // const produto = await ProdutoModel.findById(produtoId);
      const categoriaArr = await CategoriaProdutoModel.findById(categoriaId);

      for(let j=0; j<= categoriaArr['produtos'].length-1; j++){
        const produtoCategoria = await ProdutoModel.findById(categoriaArr['produtos'][j]);
        produtoArr.push(produtoCategoria);
      }
      const produtos = produtoReq.concat(produtoArr);
      const categoria = await CategoriaProdutoModel.findByIdAndUpdate(categoriaId, { produtos:produtos}, {new: true}).populate('produtos');
      return res.send(categoria);
      
    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }
}

module.exports = new ProdutoController();