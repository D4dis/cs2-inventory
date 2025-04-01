import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchUserInventory = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async (searchTerm) => {
    if (searchTerm.length < 3) return;
    const response = await fetch(`/api/search-user?query=${searchTerm}`);
    const users = await response.json();
    setSuggestions(users);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchUsers(e.target.value);
  };

  const handleSelectUser = (steamId) => {
    navigate(`/inventory/${steamId}`);
  };

  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center items-center mt-10">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Rechercher un joueur Steam..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-80 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <ul className="mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">
        {suggestions.map(user => (
          <li
            key={user.steamId}
            onClick={() => handleSelectUser(user.steamId)}
            className="p-2 cursor-pointer hover:bg-blue-100 transition"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchUserInventory;
