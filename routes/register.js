const express = require('express');
const multer = require('multer');
const { Libro } = require('../models/db');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Agregar libro
router.post('/agregar', upload.single('archivoLibro'), async (req, res) => {
  const libroData = {
    title: req.body.tituloLibro,
    autorBook: req.body.autorLibro,
    anoLibro: req.body.anoLibro || 'No especificado',
    generoLibro: req.body.generoLibro || 'No especificado',
    descrip_book: req.body.descrip_libro || 'Sin descripción',
    nPagina: req.body.nPagina || 'No especificado',
    archivoPath: req.file ? req.file.path : null
  };

  if (!libroData.title || !libroData.autorBook) {
    return res.status(400).json({ error: 'Título y autor son requeridos' });
  }

  try {
    const nuevoLibro = new Libro(libroData);
    await nuevoLibro.save();
    res.status(201).json({ message: 'Libro registrado con éxito', libro: nuevoLibro });
  } catch (error) {
    console.error('Error al registrar libro:', error);
    res.status(500).json({ error: 'Error al registrar el libro', details: error.message });
  }
});

// Obtener todos los libros
router.get('/api/libros', async (req, res) => {
  try {
    const libros = await Libro.find().sort({ fechaCreacion: -1 });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
});

module.exports = router;