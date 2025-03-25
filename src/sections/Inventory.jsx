import React, { useEffect, useState, useRef } from 'react';
import Search from '../components/Search';
import { useMediaQuery } from 'react-responsive';
import Card from '../components/Card';

const Inventory = () => {
  const isLaptop = useMediaQuery({ maxWidth: 1400 });
  const [inventory, setInventory] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const offcanvasRef = useRef(null);
  const searchButtonRef = useRef(null);

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

      <div className='flex w-full h-full gap-6'>
        <div className={`w-1/4 z-40 h-full`} id="drawer-example" tabIndex="-1" aria-labelledby="drawer-label">
          <Search isLaptop={isLaptop} />
        </div>
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventory && inventory.map((item) => (
            <Card key={item.assetid} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Inventory
