import React from 'react'

const Search = () => {
  return (
    <div className='bg-gray-500/30 backdrop-blur-md rounded-lg px-6 py-4 text-white shadow-md duration-300 overflow-hidden'>
      <div className='relative'>
        <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 pb-1 text-white"></i>
        <input
          type="text"
          className='bg-zinc-800 text-white rounded-lg pl-10 pr-4 py-2 focus:border-blue-500 border-b-1 border-transparent transition duration-300 outline-0 caret-blue-500'
          placeholder='Search for items'
        />
      </div>
    </div>
  )
}

export default Search