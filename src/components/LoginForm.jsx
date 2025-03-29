import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [steamGuardCode, setSteamGuardCode] = useState(""); // Nouveau champ pour le code Steam Guard
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = async () => {
    setMessage("Connexion en cours...");

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  const confirmSteamGuard = async () => {
    const response = await fetch("http://localhost:5000/confirm-steam-guard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ steamGuardCode }),
    });

    const data = await response.json();
    setMessage(data.message || data.error);
  };

  const fetchUserInfo = async () => {
    const response = await fetch("http://localhost:5000/user-info");
    const data = await response.json();

    if (data.error) {
      setMessage(data.error);
    } else {
      console.log(data);
      setUserInfo(data);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Connexion Steam</h2>

      <label className="block mb-2 text-gray-700">Nom d'utilisateur :</label>
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="block mb-2 text-gray-700">Mot de passe :</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-2 top-2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "👁️" : "🙈"}
        </button>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Se connecter
      </button>

      {message.includes("Steam Guard") && (
        <div>
          <label className="block mb-2 text-gray-700 mt-4">Entrez le code Steam Guard :</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            value={steamGuardCode}
            onChange={(e) => setSteamGuardCode(e.target.value)}
          />
          <button
            onClick={confirmSteamGuard}
            className="w-full bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600"
          >
            Confirmer Steam Guard
          </button>
        </div>
      )}

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}

      {userInfo && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-bold">Infos du compte :</h3>
          <p><strong>Steam ID :</strong> {userInfo.steamID}</p>
          <p><strong>Nom :</strong> {userInfo.username}</p>
          <p><strong>VAC Banni :</strong> {userInfo.vacBanned ? "Oui" : "Non"}</p>
          <p><strong>Solde Wallet :</strong> {userInfo.walletBalance || "Inconnu"}</p>
          <p><strong>Email Vérifié :</strong> {userInfo.emailValidated ? "Oui" : "Non"}</p>
        </div>
      )}

      <button
        onClick={fetchUserInfo}
        className="w-full bg-purple-500 text-white py-2 rounded mt-4 hover:bg-purple-600"
      >
        Voir mes infos
      </button>
    </div>
  );
};

export default LoginForm;
