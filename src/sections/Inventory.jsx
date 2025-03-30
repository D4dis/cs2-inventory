import React, { useEffect, useState, useRef } from 'react';
import Search from '../components/Search';
import { useMediaQuery } from 'react-responsive';
import Card from '../components/Card';

const CACHE_DURATION = 60 * 60 * 1000;

const Inventory = ({ steamID = '76561198032730078'}) => {
  const isLaptop = useMediaQuery({ maxWidth: 1400 });
  const [inventory, setInventory] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const offcanvasRef = useRef(null);
  const searchButtonRef = useRef(null);

  const fetchInventory = async () => {
    const cachedInventories = JSON.parse(localStorage.getItem('inventories')) || {};
    const cachedData = cachedInventories[steamID];

    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      console.log(`✅ Chargé depuis le cache pour ${steamID}`);
      console.log(cachedData.data);
      setInventory(cachedData.data);
      return;
    }

    try {
      console.log(`🔄 Chargement depuis l'API pour ${steamID}`);
      const response = await fetch(`http://localhost:3001/api/inventory/${steamID}`);
      const data = await response.json();
      setInventory(data);
      console.log(data);

      cachedInventories[steamID] = { data, timestamp: Date.now() };
      localStorage.setItem('inventories', JSON.stringify(cachedInventories));
    } catch (error) {
      console.error(`❌ Erreur lors de la récupération de l'inventaire de ${steamID}:`, error);
    }
  };

  useEffect(() => {
    if (steamID) {
      fetchInventory();
    }
  }, [steamID]);

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

      <div className='flex w-full h-full gap-3'>
        <div className={`w-1/5 z-40 h-full`} id="drawer-example" tabIndex="-1" aria-labelledby="drawer-label">
          <Search isLaptop={isLaptop} />
        </div>
        <div className="w-full lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {inventory && inventory.map((item) => (
            <Card key={item.assetid} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Inventory
