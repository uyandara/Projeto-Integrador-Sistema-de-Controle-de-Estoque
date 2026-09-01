const express = require('express');
const router = express.Router();

// Listar todos
router.get('/', (req, res) => {
    res.json({ mensagem: "Lista de fornecedores" });
});

// Criar
router.post('/', (req, res) => {
    const { nomeEmpresa, cnpj, endereco, telefone, email, contatoPrincipal } = req.body;
    res.status(201).json({ 
        mensagem: "Fornecedor cadastrado com sucesso!",
        fornecedor: { nomeEmpresa, cnpj, endereco, telefone, email, contatoPrincipal }
    });
});

// Atualizar
router.put('/:id', (req, res) => {
    res.json({ mensagem: `Fornecedor ${req.params.id} atualizado!` });
});

// Excluir
router.delete('/:id', (req, res) => {
    res.json({ mensagem: `Fornecedor ${req.params.id} excluído!` });
});

module.exports = router;
