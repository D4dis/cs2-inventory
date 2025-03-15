import React from 'react'
import Search from '../components/Search'

const Hero = () => {
  return (
    <section>
      <div className='container mx-auto flex flex-col items-center justify-center py-30 px-4 md:px-0'>
        <h1 className='text-4xl font-bold text-white'>Blabla's Inventory</h1>
        <Search />
      </div>
    </section>
  )
}

export default Hero