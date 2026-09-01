import React, { useState, useEffect } from 'react';
import api from '../api';

function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const [form, setForm] = useState({
    nomeEmpresa: '', cnpj: '', endereco: '', telefone: '', email: '', contatoPrincipal: ''
  });
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    carregarFornecedores();
  }, []);

  const carregarFornecedores = async () => {
    try {
      const res = await api.get('/fornecedores');
      setFornecedores(res.data.fornecedores || []);
    } catch {
      setFornecedores([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/fornecedores', form);
      setMensagem('✅ Fornecedor cadastrado com sucesso!');
      setForm({ nomeEmpresa: '', cnpj: '', endereco: '', telefone: '', email: '', contatoPrincipal: '' });
      carregarFornecedores();
    } catch {
      setMensagem('❌ Erro ao cadastrar fornecedor!');
    }
    setTimeout(() => setMensagem(''), 3000);
  };

  return (
    <div>
      <h2>🏢 Gerenciar Fornecedores</h2>
      {mensagem && <p className="mensagem sucesso">{mensagem}</p>}
      
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome da Empresa" value={form.nomeEmpresa}
          onChange={(e) => setForm({...form, nomeEmpresa: e.target.value})} required />
        <input placeholder="CNPJ (ex: 00.000.000/0000-00)" value={form.cnpj}
          onChange={(e) => setForm({...form, cnpj: e.target.value})} required />
        <input placeholder="Endereço Completo" value={form.endereco}
          onChange={(e) => setForm({...form, endereco: e.target.value})} required />
        <input placeholder="Telefone (ex: (00) 0000-0000)" value={form.telefone}
          onChange={(e) => setForm({...form, telefone: e.target.value})} required />
        <input placeholder="E-mail" type="email" value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})} required />
        <input placeholder="Nome do Contato Principal" value={form.contatoPrincipal}
          onChange={(e) => setForm({...form, contatoPrincipal: e.target.value})} required />
        <button type="submit">Cadastrar Fornecedor</button>
      </form>

      <h3>Lista de Fornecedores</h3>
      <ul>
        {fornecedores.length === 0 ? (
          <li>Nenhum fornecedor cadastrado ainda.</li>
        ) : (
          fornecedores.map((f, i) => (
            <li key={i}>
              <strong>{f.nomeEmpresa}</strong> — CNPJ: {f.cnpj} <br />
              Contato: {f.contatoPrincipal} | {f.email} | {f.telefone} <br />
              Endereço: {f.endereco}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Fornecedores;
