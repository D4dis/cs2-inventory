import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config({ path: '.env.local' });

const app = express();
app.use(cors());

app.get('/api/inventory/:steamID', async (req, res) => {
  const steamID = req.params.steamID;

  if (!steamID) {
    return res.status(400).json({ error: "Le Steam ID est requis" });
  }

  try {
    const response = await fetch(`https://www.steamwebapi.com/steam/api/inventory?key=${process.env.VITE_APP_STEAMWEB_API_KEY}&steam_id=${steamID}`);
    const data = await response.json();

    if (!data || data.error) {
      return res.status(404).json({ error: "Inventaire introuvable ou Steam ID invalide" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération de l'inventaire" });
    console.error("Erreur serveur:", error);
  }
});


app.get('/api/profile/:steamID', async (req, res) => {
  const steamID = req.params.steamID;

  if (!steamID) {
    return res.status(400).json({ error: "Le Steam ID est requis" });
  }

  try {
    const responseProfile = await fetch(`https://www.steamwebapi.com/steam/api/profile?id=${steamID}&key=${process.env.VITE_APP_STEAMWEB_API_KEY}`);
    const dataProfile = await responseProfile.json();

    if (!dataProfile || dataProfile.error) {
      return res.status(404).json({ error: "Profil introuvable ou Steam ID invalide" });
    }

    res.json(dataProfile);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération du profil" });
    console.error("Erreur serveur:", error);
  }
});


// app.get('/api/searchUser/:search', async (req, res) => {
//   const name = req.params.search;

//   if (!name) {
//     return res.status(400).json({ error: "Le nom est requis" });
//   }

//   try {
//     const response = await fetch(`https://www.steamwebapi.com/explore/api/profile?key=${process.env.VITE_APP_STEAMWEB_API_KEY}&name=${name}`);
//     const data = await response.json();

//     if (!data || data.error) {
//       return res.status(404).json({ error: "Utilisateur introuvable" });
//     }

//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Erreur lors de la recherche de l'utilisateur" });
//     console.error("Erreur serveur:", error);
//   }
// });

app.listen(3001, () => console.log('Serveur proxy en écoute sur http://localhost:3001'));
