import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Fornecedores from './pages/Fornecedores';
import Associacoes from './pages/Associacoes';

function App() {
  return (
    <Router>
      <div>
        <h1>📦 Sistema de Controle de Estoque</h1>
        <nav style={{ textAlign: 'center' }}>
          <Link to="/produtos">Produtos</Link>
          <Link to="/fornecedores">Fornecedores</Link>
          <Link to="/associacoes">Associação Produto/Fornecedor</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/associacoes" element={<Associacoes />} />
            <Route path="/" element={
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <h2>Bem-vindo ao Sistema de Controle de Estoque!</h2>
                <p style={{ marginTop: '20px', fontSize: '18px' }}>
                  Selecione uma das opções acima para gerenciar seus Produtos, Fornecedores ou Associações.
                </p>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
