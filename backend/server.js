import express from 'express';
import cors from 'cors';
import SteamUser from 'steam-user';
import bodyParser from 'body-parser';

const app = express();
const client = new SteamUser();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let steamGuardCallback = null;
let isLoggingIn = false;
let userInfo = null; // Stocke les infos de l'utilisateur après connexion
let retryTimeout = false; // Flag pour contrôler les tentatives de reconnexion

// Fonction pour réinitialiser le retryTimeout après un certain temps (par exemple, 30 secondes)
const resetRetryTimeout = () => {
  setTimeout(() => {
    retryTimeout = false;
    console.log('✅ Vous pouvez maintenant essayer de vous reconnecter.');
  }, 30000); // Attendre 30 secondes avant de permettre une nouvelle tentative
};

// Événement Steam Guard
client.on('steamGuard', (domain, callback) => {
  console.log('🔒 Steam Guard activé. Entrez le code reçu sur votre application Steam pour continuer.');

  // Le callback ne sera appelé que lorsque l'utilisateur entre le code Steam Guard
  steamGuardCallback = (code) => {
    console.log('✔️ Steam Guard validé avec le code ! Tentative de connexion...');
    callback(code); // Passe le code et poursuit la connexion
  };

  console.log('✅ Vous pouvez entrer le code Steam Guard pour continuer.');
});

// Événement de connexion réussie
client.on('loggedOn', () => {
  console.log('✅ Connecté à Steam avec succès !');
  client.setPersona(SteamUser.EPersonaState.Online);

  // Récupération des infos de l'utilisateur
  userInfo = {
    steamID: client.steamID.getSteamID64(),
    username: client.accountInfo?.personaName || "Inconnu",  // Utilisation de personaName au lieu de name
    vacBanned: client.vacBanned,
    walletBalance: client.walletBalance,
    emailValidated: client.emailValidated,
  };

  isLoggingIn = false; // Autorise de nouvelles connexions
});

// Gestion des erreurs spécifiques
client.on('error', (err) => {
  if (err.message === "RateLimitExceeded") {
    console.error("Erreur: Limite de tentatives atteinte. Veuillez patienter avant de réessayer.");
    retryTimeout = true;
    resetRetryTimeout(); // Réinitialise le timeout après un certain délai
  } else {
    console.error('Erreur de connexion:', err.message);
  }
});

// Endpoint de connexion
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Nom d\'utilisateur et mot de passe requis' });
  }

  if (isLoggingIn) {
    return res.status(400).json({ error: 'Connexion déjà en cours, veuillez patienter.' });
  }

  if (retryTimeout) {
    return res.status(400).json({ error: 'Trop de tentatives. Veuillez patienter avant de réessayer.' });
  }

  isLoggingIn = true;
  client.logOn({ accountName: username, password: password });

  res.json({ message: 'Demande de connexion envoyée, veuillez vérifier votre application Steam pour Steam Guard.' });
});

// Endpoint pour confirmer Steam Guard avec le code
app.post('/confirm-steam-guard', (req, res) => {
  const { steamGuardCode } = req.body; // Code Steam Guard envoyé par l'utilisateur

  if (steamGuardCallback) {
    console.log('✔️ Steam Guard validé avec le code !');
    steamGuardCallback(steamGuardCode);
    steamGuardCallback = null;
    return res.json({ message: 'Steam Guard validé. Connexion en cours...' });
  } else {
    return res.status(400).json({ error: 'Aucune demande Steam Guard en attente.' });
  }
});

// Endpoint pour récupérer les infos de l'utilisateur connecté
app.get('/user-info', (req, res) => {
  if (userInfo) {
    return res.json(userInfo);
  } else {
    return res.status(404).json({ error: 'Aucun utilisateur connecté.' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
});
