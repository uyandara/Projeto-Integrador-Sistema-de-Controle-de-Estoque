const express = require('express');
const router = express.Router();

// CRUD - Produtos

// Listar todos
router.get('/', (req, res) => {
    res.json({ mensagem: "Lista de produtos" });
});

// Criar
router.post('/', (req, res) => {
    const { nome, descricao, preco, codigoBarras } = req.body;
    res.status(201).json({ 
        mensagem: "Produto criado com sucesso!",
        produto: { nome, descricao, preco, codigoBarras }
    });
});

// Atualizar
router.put('/:id', (req, res) => {
    res.json({ mensagem: `Produto ${req.params.id} atualizado!` });
});

// Excluir
router.delete('/:id', (req, res) => {
    res.json({ mensagem: `Produto ${req.params.id} excluído!` });
});

module.exports = router;
