const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Definir a rota para receber notificações do Mercado Livre
app.post('/api/mercado-livre-notifications', async (req, res) => {
  try {
    // Reenvia os dados para o backend Flask
    await axios.post('https://b54e-45-163-2-79.ngrok-free.app/notifications', req.body);
    res.status(200).send('OK');
  } catch (error) {
    console.error('Erro ao processar a notificação:', error);
    res.status(500).send('Erro ao processar a notificação');
  }
});


module.exports = app;
