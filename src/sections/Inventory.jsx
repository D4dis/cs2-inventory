import React, { useEffect, useState, useRef } from 'react'
import Search from '../components/Search'

const Inventory = () => {
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

      <div className="text-center">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
          Show drawer
        </button>
      </div>

      <div className='flex w-full gap-6'>
        <div className={`py-30 w-1/4 fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full `} id="drawer-example" tabIndex="-1" aria-labelledby="drawer-label">
          <Search />
        </div>
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventory && inventory.map((item) => (
            <div key={item.assetid} className="border rounded-lg shadow-sm bg-gray-800 border-gray-700 cursor-pointer">
              <div className='relative overflow-hidden'>
                <img
                  className="rounded-t-lg w-50 mx-auto"
                  src={`${item.image}`}
                  alt={item.marketname + ' icon'}
                />
                <div
                  className={"absolute top-0 left-0 w-full h-full"}
                  style={{ backgroundImage: `linear-gradient(to top, var(--${item.color.toUpperCase()}), transparent)` }}
                ></div>
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.marketname}</h5>
                <p className="mb-3 font-normal text-gray-400">
                  {item.infotypehintjgdcahfebihl}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </section >
  )
}

export default Inventory
