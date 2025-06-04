const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  title: String,
  autorBook: String,
  anoLibro: String,
  generoLibro: String,
  descrip_book: String,
  nPagina: String,
  archivoPath: String 
});

module.exports = mongoose.model('Usuarios', usuarioSchema);
