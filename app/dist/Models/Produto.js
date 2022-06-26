"use strict";
const mongooseProduto = require('../DataBase/index');
const Produto = new mongooseProduto.Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    timestamps: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongooseProduto.model("Produto", Produto);
