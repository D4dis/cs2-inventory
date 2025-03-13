import { useState } from 'react';
import ak47white from '../assets/ak47white.svg'

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <header className='fixed container mx-auto py-4 px-4 top-0 left-0 right-0'>
      <div className='flex justify-between items-center w-full h-16 px-4 bg-zinc-700 text-white shadow-sm rounded'>
        <div className='flex items-center'>
          <a href='#'>
            <img src={ak47white} alt='logo' className='w-8 h-8' />
          </a>
        </div>
        <div className='flex items-center gap-5'>
          {isConnected ? (
            <a href='#' className='text-black hover:text-gray-300'>
              <i className='fas fa-user'></i>
            </a>
          ) : (<button className='px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded-lg shadow-sm cursor-pointer'>
            Se connecter
            <i class="ml-3 fa-brands fa-steam-symbol"></i>
          </button>)}
        </div>
      </div>
    </header>
  )
}

export default Navbar