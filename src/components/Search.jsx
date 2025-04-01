import Accordion from "./Accordion";
import CustomCheckbox from "./Checkbox";

const Search = ({ isLaptop }) => {

  return (
    <div className='sticky top-30 w-full bg-gray-500/30 rounded-lg px-6 py-4 text-white shadow-md duration-300 overflow-hidden flex flex-col items-center'>
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

      {/* Wear */}
      <Accordion title={"Wear"}>
      </Accordion>
      <hr className="w-full h-px mb-2 bg-gray-500/50 border-0 mt-5" />
      {/* Special */}
      <Accordion title={"Special"}>
        <div className='w-full flex justify-around transition-all duration-300'>
          <div className="flex items-center">
            <input id="StatTrack" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 hover:bg-gray-200 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="StatTrack" className="ms-2 text-sm font-semibold text-[#ff782b] cursor-pointer">StatTrack&trade;</label>
          </div>
          <div className="flex items-center">
            <input id="Souvenir" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="Souvenir" className="ms-2 text-sm font-semibold text-[#ffd701] cursor-pointer">Souvenir</label>
          </div>
          <div className="flex items-center">
            <input id="Normal" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="Normal" className="ms-2 text-sm font-semibold text-white cursor-pointer">Normal</label>
          </div>
        </div>
      </Accordion>
      <hr className="w-full h-px mb-2 bg-gray-500/50 border-0 mt-5" />
      {/* Rarity */}
      <Accordion title={"Rarity"}>
        <select id="rarity" className="w-full bg-zinc-800 text-white rounded-lg p-2 focus:border-blue-500 hover:bg-zinc-600 focus:bg-zinc-600 border-b-1 border-transparent transition-[border] duration-300 outline-0 cursor-pointer">
          <option defaultValue={"any"}>Any</option>
          <option value="consumer">Consumer</option>
          <option value="industrail">Industrial</option>
          <option value="mil-spec">Mil-Spec</option>
          <option value="restricted">Restricted</option>
          <option value="classified">Classified</option>
          <option value="covert">Covert</option>
          <option value="contraband">Contraband</option>
        </select>
      </Accordion>
      <hr className="w-full h-px mb-2 bg-gray-500/50 border-0 mt-5" />
    </div>

  )
}

export default Search