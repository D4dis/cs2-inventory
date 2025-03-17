import React from 'react'

const Search = () => {
  return (
    <div className='w-full bg-gray-500/30 backdrop-blur-md rounded-lg px-6 py-4 text-white shadow-md duration-300 overflow-hidden flex flex-col items-center'>
      <div className='relative w-full'>
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 pb-1 text-white"></i>
        <input
          type="text"
          className='w-full bg-zinc-800 text-white rounded-lg pl-10 pr-4 py-2 focus:border-blue-500 hover:bg-zinc-600 border-b-1 border-transparent transition-[border] duration-300 outline-0 caret-blue-500'
          placeholder='Search for items . . .'
        />
      </div>

      {/* Special */}

      <div className='flex flex-col items-center justify-center mt-4 gap-4' id='SpecialDropdown'>
        Special
        <div className='flex gap-5'>
          <div className="flex items-center mb-4">
            <input id="StatTrack" type="checkbox" name='StatTrack' value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 hover:bg-gray-200 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="StatTrack" className="ms-2 text-sm font-medium text-orange-500 cursor-pointer">StatTrack&trade;</label>
          </div>
          <div className="flex items-center mb-4">
            <input id="Souvenir" type="checkbox" name='Souvenir' value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="Souvenir" className="ms-2 text-sm font-medium text-yellow-500 cursor-pointer">Souvenir</label>
          </div>
          <div className="flex items-center mb-4">
            <input id="Normal" type="checkbox" value="" name='Normal' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer" />
            <label htmlFor="Normal" className="ms-2 text-sm font-medium text-white cursor-pointer">Normal</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search