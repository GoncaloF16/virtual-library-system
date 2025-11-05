const mongoose = require('mongoose');

const EmprestimoSchema = new mongoose.Schema({
  livro: { type: mongoose.Schema.Types.ObjectId, ref: 'Livro', required: true },
  leitor: { type: mongoose.Schema.Types.ObjectId, ref: 'Leitor', required: true },
  dataEmprestimo: { type: Date, required: true },
  dataDevolucao: { type: Date, default: null },
  devolvido: { type: Boolean, default: false }
});

module.exports = mongoose.model('Emprestimo', EmprestimoSchema);
