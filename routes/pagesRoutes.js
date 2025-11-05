const express = require('express');
const router = express.Router();

const Livro = require('../models/livro');
const Emprestimo = require('../models/emprestimo');
const Leitor = require('../models/leitor');    

router.get("/", async (req, res) => {
  try {
    const livros = await Livro.find();
    res.render("index", { livros });
  } catch (err) {
    res.status(500).send("Erro ao carregar livros");
  }
});

router.get("/leitores", async (req, res) => {
  try {
    const leitores = await Leitor.find();
    res.render("leitores", { leitores });
  } catch (err) {
    res.status(500).send("Erro ao carregar leitores");
  }
});

router.get("/emprestimos", async (req, res) => {
  try {
    const emprestimos = await Emprestimo.find()
      .populate('leitor', 'nome')  
      .populate('livro', 'titulo'); 

    const leitores = await Leitor.find();
    const livros = await Livro.find();

    res.render("emprestimos", { emprestimos, leitores, livros });
  } catch (err) {
    res.status(500).send("Erro ao carregar empréstimos");
  }
});

module.exports = router;
