const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rotas
const produtosRoutes = require('./routes/produtos');
const fornecedoresRoutes = require('./routes/fornecedores');
const associacoesRoutes = require('./routes/associacoes');

app.use('/produtos', produtosRoutes);
app.use('/fornecedores', fornecedoresRoutes);
app.use('/associacoes', associacoesRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('🚀 Servidor funcionando! Rotas disponíveis: /produtos, /fornecedores, /associacoes');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
