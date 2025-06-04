const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 100 },
  autorBook: { type: String, required: true, trim: true },
  anoLibro: { type: String, default: 'No especificado' },
  generoLibro: { type: String, default: 'No especificado' },
  descrip_book: { type: String, default: 'Sin descripción' },
  nPagina: { type: String, default: 'No especificado' },
  archivoPath: { type: String },
  fechaCreacion: { type: Date, default: Date.now }
});

const Libro = mongoose.model('Libro', libroSchema);

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/gestion_libros', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error de conexión a MongoDB:', err);
    process.exit(1);
  }
};

module.exports = { Libro, connectDB };