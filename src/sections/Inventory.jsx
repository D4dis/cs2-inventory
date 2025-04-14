
import React, { useEffect, useState, useRef } from 'react';
import Search from '../components/Search';
import { useMediaQuery } from 'react-responsive';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';

const CACHE_DURATION = 60 * 60 * 1000;

const Inventory = () => {
  // localStorage.clear();
  const isLaptop = useMediaQuery({ maxWidth: 1400 });
  const [inventory, setInventory] = useState(null);
  const [profile, setProfile] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const offcanvasRef = useRef(null);
  const searchButtonRef = useRef(null);

  const { steamID } = useParams();

  const fetchInventory = async () => {
    const cachedInventories = JSON.parse(localStorage.getItem('inventories')) || {};
    const cachedDataInventory = cachedInventories[steamID];

    if (cachedDataInventory && Date.now() - cachedDataInventory.timestamp < CACHE_DURATION) {
      console.log(`✅ Inventory chargé depuis le cache pour ${steamID}`);
      console.log(cachedDataInventory.data);
      setInventory(cachedDataInventory.data);
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

  const fetchProfile = async () => {
    const cachedProfiles = JSON.parse(localStorage.getItem('profiles')) || {};
    const cachedDataProfile = cachedProfiles[steamID];

    if (cachedDataProfile && Date.now() - cachedDataProfile.timestamp < CACHE_DURATION) {
      console.log(`✅ Profile chargé depuis le cache pour ${steamID}`);
      console.log(cachedDataProfile.data);
      setProfile(cachedDataProfile.data);
      return;
    }

    try {
      console.log(`🔄 Chargement depuis l'API pour ${steamID}`);
      const responseProfile = await fetch(`http://localhost:3001/api/profile/${steamID}`);
      const dataProfile = await responseProfile.json();
      setProfile(dataProfile);
      console.log(dataProfile);

      cachedProfiles[steamID] = { data: dataProfile, timestamp: Date.now() };
      localStorage.setItem('profiles', JSON.stringify(cachedProfiles));
    } catch (error) {
      console.error(`❌ Erreur lors de la récupération du profil de ${steamID}:`, error);
    }
  };

  useEffect(() => {
    if (steamID) {
      fetchInventory();
      fetchProfile();
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
      {profile && (
        <div className='flex justify-center items-center gap-10'>
          <div className='flex flex-col'>
            <img src={profile.avatarfull} alt='avatar' className='w-32 h-32 mb-5 rounded-full' />
            <div className='bg-gray-500/30 rounded-full py-3 flex justify-center items-center mb-10'>
              <span className='relative flex h-3 w-3'>
                <span className={`${profile.onlinestate === 'online' ? 'btn-ping' : 'btn-ping-off'}`}></span>
                <span className={`${profile.onlinestate === 'online' ? 'btn-ping_dot' : 'btn-ping-off_dot'}`}></span>
              </span>
              <span className='ml-5 text-lg text-white capitalize'>{profile.onlinestate}</span>
            </div>

          </div>
          <h1 className='text-4xl font-bold text-white pb-25'><a href={profile.profilesteamurl} target='_blank' className='text-[#66c0f4] hover:text-[#66c0f4]/50 hover:underline underline-offset-4 transition-all duration-300'>{profile.personaname}</a>'s Inventory</h1>
        </div>
      )}

      <div className='flex w-full h-full gap-3'>
        <div className={`w-1/5 z-40`} id="drawer-example" tabIndex="-1" aria-labelledby="drawer-label">
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
