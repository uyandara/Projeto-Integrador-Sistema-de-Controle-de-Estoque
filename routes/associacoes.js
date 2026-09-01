const express = require('express');
const router = express.Router();

// Associar fornecedor ao produto
router.post('/:produtoId/fornecedores/:fornecedorId', (req, res) => {
    res.json({ 
        mensagem: "Fornecedor associado com sucesso ao produto!",
        produtoId: req.params.produtoId,
        fornecedorId: req.params.fornecedorId
    });
});

// Desassociar
router.delete('/:produtoId/fornecedores/:fornecedorId', (req, res) => {
    res.json({ mensagem: "Fornecedor desassociado com sucesso!" });
});

// Listar fornecedores de um produto
router.get('/:produtoId/fornecedores', (req, res) => {
    res.json({ mensagem: `Fornecedores do produto ${req.params.produtoId}` });
});

module.exports = router;
