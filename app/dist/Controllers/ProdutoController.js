"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProdutoModel = require('../Models/Produto');
const CategoriaModel = require('../Models/Categoria');
class ProdutoController {
    async criaProduto(req, res) {
        try {
            const produto = await ProdutoModel.create(req.body);
            return res.send(produto);
        }
        catch (error) {
            return res.status(400).send({ 'error': error.message });
        }
    }
    async listaProdutos(req, res) {
        const produto = await ProdutoModel.find();
        return res.send(produto);
    }
}
module.exports = new ProdutoController();
