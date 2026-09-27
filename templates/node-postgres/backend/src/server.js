const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', taskRoutes);

// Rota simples de teste
app.get('/', (req, res) => {
    res.json({
        message: 'API funcionando!'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});