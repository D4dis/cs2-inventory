import React from 'react'
import Search from '../components/Search'

const Inventory = () => {
  return (
    <section className='container flex flex-col items-center justify-center py-30 px-4'>
      <h1 className='text-4xl font-bold text-white mb-5'>Blabla's Inventory</h1>
      <Search />
    </section>
  )
}

export default Inventory