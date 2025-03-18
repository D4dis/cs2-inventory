import React, { useEffect, useState, useRef } from 'react'
import Search from '../components/Search'

const Inventory = () => {
  const [inventory, setInventory] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const offcanvasRef = useRef(null);
  const searchButtonRef = useRef(null);

  const colorRarity = (rarity) => {
    switch (rarity) {
      case "Consumer Grade":
        return '(--rarity-consumer)';
      case "Industrial Grade":
        return '(--rarity-industrial)';
      case "Mil-Spec Grade":
        return '(--rarity-mil-spec)';
      case "Restricted":
        return '(--rarity-restricted)';
      case "Classified":
        return '(--rarity-classified)';
      case "Covert":
        return '(--rarity-covert)';
      case "Contraband":
        return '(--rarity-contraband)';
      default:
        return '(--rarity-covert)';
    }
  }

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/inventory');
        const data = await response.json();
        setInventory(data);
        console.log(data);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'inventaire:", error);
      }
    };

    fetchInventory();
  }, []);

  inventory && inventory.descriptions.map((item) => {
    console.log(colorRarity(item.tags[4].localized_tag_name));
  });

  const handleClickOutside = (event) => {
    if (offcanvasRef.current && !offcanvasRef.current.contains(event.target) && !searchButtonRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section className='container mx-auto flex flex-col items-center justify-center pt-30 pb-10 px-4'>
      <h1 className='text-4xl font-bold text-white mb-10'>Blabla's Inventory</h1>

      {/* Bouton pour afficher le Search sur tablette */}
      <button
        className="sm:hidden mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => setShowSearch(!showSearch)}
      >
        {showSearch ? "Fermer la recherche" : "Ouvrir la recherche"}
      </button>

      <div className='flex w-full gap-6'>
        {/* Search visible seulement sur grand écran (w-1/4) */}
        <div className={`w-1/4 lg:block ${showSearch ? 'block' : 'hidden sm:block'}`}>
          <Search />
        </div>

        {/* Grid des cartes (75% sur grand écran, 100% sinon) */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventory && inventory.descriptions.map((item) => (
            <div key={item.classid} className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 cursor-pointer">
              <div className='relative overflow-hidden'>
                <img
                  className="rounded-t-lg w-50 mx-auto"
                  src={`https://community.cloudflare.steamstatic.com/economy/image/${item.icon_url}`}
                  alt={item.name + ' icon'}
                />
                <div
                  className={"absolute top-0 left-0 w-full h-full"}
                  style={{ backgroundImage: `linear-gradient(to top, var${colorRarity(item.tags[4].localized_tag_name)}, transparent)` }}
                ></div>
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.name}</h5>
                <p className="mb-3 font-normal text-gray-400">
                  {item.descriptions[0]?.value.slice(10)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Inventory
