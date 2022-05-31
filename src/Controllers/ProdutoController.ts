const ProdutoModel = require('../Models/Produto');
const CategoriaProdutoModel = require('../Models/Categoria');
const HelpersFunc = require('../Helpers/Helpers');

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
      const produtoReq:any[] = [];
      const produtoArr = [];

      for(let i=0; i<= produtoId.length-1; i++){
        const produto = await ProdutoModel.findById(produtoId[i]);
        produtoReq.push(produto);
      }

      const categoriaArr = await CategoriaProdutoModel.findById(categoriaId);

      for(let j=0; j<= categoriaArr['produtos'].length-1; j++){
        const produtoCategoria = await ProdutoModel.findById(categoriaArr['produtos'][j]);
        produtoArr.push(produtoCategoria);
      }

      const produtos = produtoReq.concat(produtoArr);
      const produtosUnicos = HelpersFunc.limpaDuplicados(produtos, JSON.stringify);
      console.log(produtosUnicos);

      const categoria = await CategoriaProdutoModel.findByIdAndUpdate(categoriaId, { produtos:produtosUnicos}, {new: true}).populate('produtos');
      return res.send(categoria);

    } catch (error:any) {
      return res.status(400).send({'error':error.message});
    }
  }

  async removeAtualizaProdutoCategoria(req:any, res:any){
    const {produtoId, categoriaId} = req.body;
    const produtoCat:any[] = [];

    const categoria = await CategoriaProdutoModel.findById(categoriaId);

    for(let i=0; i<=categoria['produtos'].length-1; i++){
      const produto = await ProdutoModel.findById(categoria['produtos'][i]);
      produtoCat.push(produto['_id'].valueOf());
    }

    const produtosAtualizados = produtoCat.filter((p:any) => !produtoId.includes(p));
    const categoriaAtualizada = await CategoriaProdutoModel.findByIdAndUpdate(categoriaId, { produtos:produtosAtualizados}, {new: true}).populate('produtos') 

    res.send(categoriaAtualizada);

  }

  async listaProdutos(req:any, res:any){
    const produto = await ProdutoModel.find().populate('categoria');
    return res.send(produto);
  }

}

module.exports = new ProdutoController();