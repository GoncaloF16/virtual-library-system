const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },  
  ano: { type: Number },
  genero: { type: String },
  avaliacoes: [{
    nota: { type: Number, min: 1, max: 5 },
    comentario: String
  }]
});

module.exports = mongoose.model('Livro', LivroSchema);
