import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config({ path: '.env.local' });

const app = express();
app.use(cors());

app.get('/api/inventory', async (req, res) => {
  try {
    const response = await fetch(`https://www.steamwebapi.com/steam/api/inventory?key=${process.env.VITE_APP_API_KEY}&steam_id=${process.env.VITE_APP_STEAM_ID}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l’inventaire' });
    console.log(error);
  }
});

app.listen(3001, () => console.log('Serveur proxy en écoute sur http://localhost:3001'));
