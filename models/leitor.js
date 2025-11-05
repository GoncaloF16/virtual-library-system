const mongoose = require('mongoose');

const LeitorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Leitor', LeitorSchema);
