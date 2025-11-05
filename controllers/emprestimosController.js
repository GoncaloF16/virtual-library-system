const Emprestimo = require('../models/emprestimo');


module.exports = {

  async getAll(req, res) {
    try {
      const emprestimos = await Emprestimo.find()
        .populate('livro')
        .populate('leitor'); 
      res.json(emprestimos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const emprestimo = await Emprestimo.findById(req.params.id)
        .populate('livro')
        .populate('leitor'); 
      if (!emprestimo) return res.status(404).json({ error: 'Empréstimo não encontrado' });
      res.json(emprestimo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
  try {
    const { leitor_id, livro_id, data_emprestimo, data_devolucao } = req.body;

    const dataEmprestimoDate = new Date(data_emprestimo);
    const dataDevolucaoDate = data_devolucao ? new Date(data_devolucao) : null;

    if (isNaN(dataEmprestimoDate)) {
      return res.status(400).json({ error: 'Data de empréstimo inválida' });
    }
    if (data_devolucao && isNaN(dataDevolucaoDate)) {
      return res.status(400).json({ error: 'Data de devolução inválida' });
    }

    const novo = new Emprestimo({
      leitor: leitor_id,
      livro: livro_id,
      dataEmprestimo: dataEmprestimoDate,
      dataDevolucao: dataDevolucaoDate
    });

    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},


 async update(req, res) {
  try {
    const { leitor_id, livro_id, data_emprestimo, data_devolucao, devolvido } = req.body;

    const dataEmprestimoDate = new Date(data_emprestimo);
    const dataDevolucaoDate = data_devolucao ? new Date(data_devolucao) : null;

    if (isNaN(dataEmprestimoDate)) {
      return res.status(400).json({ error: 'Data de empréstimo inválida' });
    }
    if (data_devolucao && isNaN(dataDevolucaoDate)) {
      return res.status(400).json({ error: 'Data de devolução inválida' });
    }

    await Emprestimo.findByIdAndUpdate(req.params.id, {
      leitor: leitor_id,
      livro: livro_id,
      dataEmprestimo: dataEmprestimoDate,
      dataDevolucao: dataDevolucaoDate,
      devolvido
    });

    res.json({ message: 'Empréstimo atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},


  async delete(req, res) {
    try {
      const emprestimo = await Emprestimo.findByIdAndDelete(req.params.id);
      if (!emprestimo) {
        return res.status(404).json({ error: 'Empréstimo não encontrado' });
      }
      res.json({ message: 'Empréstimo apagado com sucesso' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
