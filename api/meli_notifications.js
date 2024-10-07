const express = require('express');
const axios = require('axios');
const serverless = require('serverless-http');
const app = express();

// Middleware
app.use(express.json());

// Rota para notificações do Mercado Livre
app.post('/api/mercado-livre-notifications', async (req, res) => {
  try {
    // Reenvia os dados para o backend Flask
    await axios.post(
      'https://33a3-45-163-2-79.ngrok-free.app/api/notifications',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).send('OK');
  } catch (error) {
    console.error('Erro ao processar a notificação:', error);
    res.status(500).send('Erro ao processar a notificação');
  }
});

// Rota padrão para a página inicial
app.get('/', (req, res) => {
  res.send('API está rodando!');
});

// if (process.env.NODE_ENV !== 'production') {
//     const port = process.env.PORT || 3000;
//     app.listen(port, () => {
//       console.log(`Servidor rodando na porta ${port}`);
//     });
//   }

  
// Exporta o app para a Vercel
module.exports = app;
module.exports.handler = serverless(app);
