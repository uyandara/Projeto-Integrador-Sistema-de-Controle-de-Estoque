const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('Olá, Mundo! Servidor funcionando! 🚀');
});

// Rotas serão adicionadas aqui posteriormente
// app.use('/produtos', require('./routes/produtos'));
// app.use('/fornecedores', require('./routes/fornecedores'));
// app.use('/associacoes', require('./routes/associacoes'));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
