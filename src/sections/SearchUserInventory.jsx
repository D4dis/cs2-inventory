import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchUserInventory = () => {
  const [steamId, setSteamId] = useState("");
  // const [query, setQuery] = useState("");
  // const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // const fetchUsers = async (searchTerm) => {
  //   if (searchTerm.length < 3) return;
  //   const response = await fetch(`/api/search-user?query=${searchTerm}`);
  //   const users = await response.json();
  //   setSuggestions(users);
  // };

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  //   fetchUsers(e.target.value);
  // };

  const handleSelectUser = (steamId) => {
    navigate(`/inventory/${steamId}`);
  };

  return (
    <section className="container min-h-screen">
      <div className="w-full h-100 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-white mb-5">Enter the Steam ID of a user (SteamId64 (DEC)), <a href="https://www.steamidfinder.com/" target="_blank" className="text-lg text-blue-500 hover:text-blue-800 hover:underline underline-offset-4 transition-all duration-300">click here</a></h1>
        <div className="flex gap-3 relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-white z-10"></i>
          <input
            type="text"
            id="steamId"
            onChange={(e) => setSteamId(e.target.value)}
            placeholder="Search for a Steam User..."
            className="w-full bg-zinc-800 text-white rounded-lg pl-10 pr-4 py-2 focus:border-blue-500 hover:bg-zinc-600 border-b-1 border-transparent transition-[border] duration-300 outline-0 caret-blue-500"
          />
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded-lg transition-all duration-300 shadow-sm cursor-pointer" onClick={() => handleSelectUser(steamId)}>Search</button>
        </div>

        {/* {suggestions != "" && <ul className="mt-2 w-80 bg-gray-300 border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map(user => (
            <li
              key={user.steamId}
              onClick={() => handleSelectUser(user.steamId)}
              className="p-2 cursor-pointer hover:bg-blue-100 transition"
            >
              {user.name}
            </li>
          ))}
        </ul>} */}
      </div>
    </section>
  );
};

export default SearchUserInventory;
