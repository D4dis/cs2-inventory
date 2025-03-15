import { useState } from 'react';
import ak47white from '../assets/ak47white.svg'

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <header className='fixed container mx-auto py-4 px-4 top-0 left-0 right-0'>
      <div className='flex justify-between items-center w-full h-16 px-4 bg-zinc-700/30 backdrop-blur-md text-white shadow-md rounded-lg duration-300 overflow-hidden'>
        <div className='flex items-center'>
          <a href='#' className='mr-5'>
            <img src={ak47white} alt='logo' className='w-8 h-8' />
          </a>
          <ul className='flex items-center gap-5 text-lg'>
            <a href='' className='relative'>
              <li>Inventory</li>
              <div className="nav-active"></div>
              <div className='absolute top-[120%] left-(65px) translate-[-50%] w-[40px] blur-[15px] opacity-[.9]' style={{ left: "calc(50% - 65px)" }}><svg _ngcontent-ng-c3162861203="" xmlns="http://www.w3.org/2000/svg" width="163" height="38" viewBox="0 0 163 38" fill="none" class="ng-tns-c3162861203-0 ng-star-inserted"><g _ngcontent-ng-c3162861203="" filter="url(#filter0_f_540_5466)" class="ng-tns-c3162861203-0"><ellipse _ngcontent-ng-c3162861203="" cx="81.5" cy="38.5" rx="56.5" ry="13.5" fill="#237BFF" class="ng-tns-c3162861203-0"></ellipse></g><defs _ngcontent-ng-c3162861203="" class="ng-tns-c3162861203-0"><filter _ngcontent-ng-c3162861203="" id="filter0_f_540_5466" x="0" y="0" width="163" height="77" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" class="ng-tns-c3162861203-0"><feFlood _ngcontent-ng-c3162861203="" flood-opacity="0" result="BackgroundImageFix" class="ng-tns-c3162861203-0"></feFlood><feBlend _ngcontent-ng-c3162861203="" mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" class="ng-tns-c3162861203-0"></feBlend><feGaussianBlur _ngcontent-ng-c3162861203="" stdDeviation="12.5" result="effect1_foregroundBlur_540_5466" class="ng-tns-c3162861203-0"></feGaussianBlur></filter></defs></svg></div>
            </a>
            <a href=''><li>Tracker</li></a>
          </ul>
        </div>
        <div className='flex items-center gap-5'>
          {isConnected ? (
            <a href='#' className='text-black hover:text-gray-300'>
              <i className='fas fa-user'></i>
            </a>
          ) : (<a href='' className='px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded-lg shadow-sm cursor-pointer'>
            Log in
            <i class="ml-3 fa-brands fa-steam-symbol"></i>
          </a>)}
        </div>
      </div>
    </header>
  )
}

export default Navbar