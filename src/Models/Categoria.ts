const mongooseCategoria = require('../DataBase/index');

const Categoria = new mongooseCategoria.Schema({
  titulo:{
      type:String,
      required: true,
      unique: true
  },
  produtos:[
    {
        type:mongooseCategoria.Schema.Types.ObjectId, 
        ref:"Produto"
    }
],
  timestamps:{
      type: Date,
      default: Date.now()
  }
});

module.exports = mongooseCategoria.model("Categoria",Categoria);