import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import ak47white from '../assets/ak47white.svg';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <header className='fixed container mx-auto py-4 px-4 top-0 left-0 right-0 z-100'>
      <div className='flex justify-between items-center w-full h-16 px-4 bg-zinc-700/30 backdrop-blur-md text-white shadow-md rounded-lg duration-300 overflow-hidden'>
        <div className='flex items-center gap-3'>
          <NavLink to='/' className='mr-5'>
            <img src={ak47white} alt='logo' className='w-8 h-8' />
          </NavLink>
          <NavLink to='/searchInventory' className='relative hover:bg-gray-500/30 px-3 py-2 rounded-lg transition-colors duration-300'>
            {({ isActive }) => (
              <>
                Inventory
                {(isActive || /^\/inventory\/[^/]+$/.test(window.location.pathname)) && (
                    <>
                      <div className="nav-active"></div>
                      <div
                        className="absolute top-[50%] translate-x-[-50%] w-[40px] blur-[15px] opacity-[.9] transition-all duration-500 ease"
                        style={{ left: "calc(50% - 65px)" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="163" height="38" viewBox="0 0 163 38" fill="none">
                          <g filter="url(#filter0_f_540_5466)">
                            <ellipse cx="81.5" cy="38.5" rx="56.5" ry="13.5" fill="#237BFF"></ellipse>
                          </g>
                          <defs>
                            <filter id="filter0_f_540_5466" x="0" y="0" width="163" height="77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                              <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_540_5466"></feGaussianBlur>
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </>
                  )}
              </>
            )}
          </NavLink>
          <NavLink to='/tracker' className='relative hover:bg-gray-500/30 px-3 py-2 rounded-lg transition-colors duration-300'>
            {({ isActive }) => (
              <>
                Tracker
                {isActive && (
                  <>
                    <div className="nav-active"></div>
                    <div
                      className="absolute top-[50%] translate-x-[-50%] w-[40px] blur-[15px] opacity-[.9] transition-all duration-500 ease"
                      style={{ left: "calc(50% - 65px)" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="163" height="38" viewBox="0 0 163 38" fill="none">
                        <g filter="url(#filter0_f_540_5466)">
                          <ellipse cx="81.5" cy="38.5" rx="56.5" ry="13.5" fill="#237BFF"></ellipse>
                        </g>
                        <defs>
                          <filter id="filter0_f_540_5466" x="0" y="0" width="163" height="77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_540_5466"></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </>
                )}
              </>
            )}
          </NavLink>
        </div>
        <div className='flex items-center gap-5'>
          {isConnected ? (
            <a href='#' className='text-black hover:text-gray-300'>
              <i className='fas fa-user'></i>
            </a>
          ) : (<a href='' className='px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded-lg transition-all duration-300 shadow-sm cursor-pointer'>
            Log in
            <i className="ml-3 fa-brands fa-steam-symbol"></i>
          </a>)}
        </div>
      </div>
    </header>
  )
}
export default Navbar