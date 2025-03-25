import { Accordion } from "flowbite-react";
import { useEffect } from "react";

const Search = ({ isLaptop }) => {
  useEffect(() => {
    console.log("Flowbite :", window.flowbite);
  }, []);

  return (
    <div className='sticky top-0 w-full bg-gray-500/30 rounded-lg px-6 py-4 text-white shadow-md duration-300 overflow-hidden flex flex-col items-center'>
      {isLaptop &&
        <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center hover:bg-gray-600 hover:text-white cursor-pointer" >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      }
      <div className='mt-10 relative w-full'>
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 pb-1 text-white z-10"></i>
        <input
          type="text"
          className='w-full bg-zinc-800 text-white rounded-lg pl-10 pr-4 py-2 focus:border-blue-500 hover:bg-zinc-600 border-b-1 border-transparent transition-[border] duration-300 outline-0 caret-blue-500'
          placeholder='Search for items . . .'
        />
      </div>

      {/* Special */}

      <div className='w-full flex flex-col items-center justify-center mt-4 gap-4 transition-all duration-300' id="accordion-collapse" data-accordion="collapse">
        <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right bg-transparent text-white hover:text-blue-800 transition-all gap-3 cursor-pointer" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
          <span>Spécial</span>
          <svg data-accordion-icon className="w-3 h-3 shrink-0" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
        <div className='w-full flex justify-around transition-all duration-300' id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
          <div className="flex items-center" >
            <input id="StatTrack" type="checkbox" name='StatTrack' value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 hover:bg-gray-200 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="StatTrack" className="ms-2 text-sm font-semibold text-orange-500 cursor-pointer">StatTrack&trade;</label>
          </div>
          <div className="flex items-center">
            <input id="Souvenir" type="checkbox" name='Souvenir' value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="Souvenir" className="ms-2 text-sm font-semibold text-yellow-500 cursor-pointer">Souvenir</label>
          </div>
          <div className="flex items-center">
            <input id="Normal" type="checkbox" value="" name='Normal' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="Normal" className="ms-2 text-sm font-semibold text-white cursor-pointer">Normal</label>
          </div>
        </div>
        <hr className="w-full h-px my-2 bg-gray-500 border-0" />
      </div>
    </div>
  )
}

export default Search