import React from 'react'

const Card = ({ item }) => {
  const getItemClass = (quality) => {
    if (quality === "StatTrak™") return 'text-[#ff782b]';
    if (quality === "Souvenir") return 'text-[#ffd701]';
    return 'text-white';
  };
  return (
    <div className="h-full border-2 border-transparent rounded-lg shadow-sm bg-gray-800 hover:translate-y-[-15px] hover:border-gray-700 transition-all duration-300 cursor-pointer">
      <div className='relative overflow-hidden'>
        <img
          className="rounded-t-lg w-50 mx-auto"
          src={`${item.image}`}
          alt={item.marketname + ' icon'}
        />
        <div
          className={"absolute top-0 left-0 w-full h-full"}
          style={{ backgroundImage: `linear-gradient(to top, var(--${item.color.toUpperCase()}50), transparent)` }}
        ></div>
        <div className={`absolute -bottom-0.5 w-full h-[5px] z-40`} style={{ background: `var(--${item.color.toUpperCase()})` }}></div>
      </div>
      <div className="p-5">
        <h5 className={`mb-2 text-2xl font-bold tracking-tight ${getItemClass(item.quality)}`}>{item.marketname.slice(0, 32) + '...'}</h5>
        <p className="mb-3 font-normal text-gray-400">
          {item.descriptions.find(desc => desc.name === 'description')?.value.slice(0, 100) + '...'}
        </p>
      </div>
    </div >
  )
}

export default Card