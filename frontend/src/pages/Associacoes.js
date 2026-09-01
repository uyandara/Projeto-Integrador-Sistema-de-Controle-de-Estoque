import React, { useState } from 'react';
import api from '../api';

function Associacoes() {
  const [produtoId, setProdutoId] = useState('');
  const [fornecedorId, setFornecedorId] = useState('');
  const [mensagem, setMensagem] = useState('');

  const associar = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`/associacoes/${produtoId}/fornecedores/${fornecedorId}`);
      setMensagem(`✅ ${res.data.mensagem}`);
    } catch {
      setMensagem('❌ Erro ao associar! Verifique se os IDs existem.');
    }
    setTimeout(() => setMensagem(''), 3000);
  };

  const desassociar = async (e) => {
    e.preventDefault();
    try {
      const res = await api.delete(`/associacoes/${produtoId}/fornecedores/${fornecedorId}`);
      setMensagem(`✅ ${res.data.mensagem}`);
    } catch {
      setMensagem('❌ Erro ao desassociar!');
    }
    setTimeout(() => setMensagem(''), 3000);
  };

  return (
    <div>
      <h2>🔗 Associação Produto ↔ Fornecedor</h2>
      {mensagem && <p className="mensagem sucesso">{mensagem}</p>}

      <form onSubmit={associar}>
        <h3>Associar Fornecedor a Produto</h3>
        <input placeholder="ID do Produto" value={produtoId}
          onChange={(e) => setProdutoId(e.target.value)} required />
        <input placeholder="ID do Fornecedor" value={fornecedorId}
          onChange={(e) => setFornecedorId(e.target.value)} required />
        <button type="submit">✅ Associar</button>
        <button type="button" style={{ background: '#e74c3c' }} onClick={desassociar}>❌ Desassociar</button>
      </form>

      <div style={{ marginTop: '30px', padding: '15px', background: '#eef6fa', borderRadius: '6px' }}>
        <h4>📋 Como usar:</h4>
        <p>1. Cadastre um Produto → anote o ID retornado</p>
        <p>2. Cadastre um Fornecedor → anote o ID retornado</p>
        <p>3. Digite os IDs acima e clique em "Associar"</p>
      </div>
    </div>
  );
}

export default Associacoes;
