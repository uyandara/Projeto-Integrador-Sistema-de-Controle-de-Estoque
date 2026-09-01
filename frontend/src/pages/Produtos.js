import React, { useState, useEffect } from 'react';
import api from '../api';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({ nome: '', descricao: '', preco: '', codigoBarras: '' });
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      const res = await api.get('/produtos');
      setProdutos(res.data.produtos || []);
    } catch {
      setProdutos([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/produtos', form);
      setMensagem('✅ Produto cadastrado com sucesso!');
      setForm({ nome: '', descricao: '', preco: '', codigoBarras: '' });
      carregarProdutos();
    } catch {
      setMensagem('❌ Erro ao cadastrar produto!');
    }
    setTimeout(() => setMensagem(''), 3000);
  };

  return (
    <div>
      <h2>📦 Gerenciar Produtos</h2>
      {mensagem && <p className="mensagem sucesso">{mensagem}</p>}
      
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome do Produto" value={form.nome}
          onChange={(e) => setForm({...form, nome: e.target.value})} required />
        <input placeholder="Descrição" value={form.descricao}
          onChange={(e) => setForm({...form, descricao: e.target.value})} required />
        <input placeholder="Preço (ex: 99.90)" type="number" step="0.01" value={form.preco}
          onChange={(e) => setForm({...form, preco: e.target.value})} required />
        <input placeholder="Código de Barras" value={form.codigoBarras}
          onChange={(e) => setForm({...form, codigoBarras: e.target.value})} required />
        <button type="submit">Cadastrar Produto</button>
      </form>

      <h3>Lista de Produtos</h3>
      <ul>
        {produtos.length === 0 ? (
          <li>Nenhum produto cadastrado ainda.</li>
        ) : (
          produtos.map((p, i) => (
            <li key={i}><strong>{p.nome}</strong> — R$ {p.preco} <br />
              {p.descricao} <br /> Código: {p.codigoBarras}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Produtos;
