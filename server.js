import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors()); 

app.get('/api/inventory', async (req, res) => {
  try {
    const response = await fetch('https://steamcommunity.com/inventory/76561198155895913/730/2');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l’inventaire' });
    console.log(error);
  }
});

app.listen(3001, () => console.log('Serveur proxy en écoute sur http://localhost:3001'));
