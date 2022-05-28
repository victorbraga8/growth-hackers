const mongooseDb = require('../DataBase/');

const Categoria = new mongooseDb.Schema({
  titulo:{
      type:String,
      required: true,
      unique: true
  },
  produtos:[
      {
          type:mongooseDb.Schema.Types.ObjectId, ref:"Produto"
      }
  ],
  timestamps:{
      type: Date,
      default: Date.now()
  }
});

module.exports = mongooseDb.model("CategoriaModel",Categoria);