import React from 'react'

const Card = ({ item }) => {
  const getItemClass = (quality) => {
    if (quality === "StatTrak™") return 'text-[#ff782b]';
    if (quality === "Souvenir") return 'text-[#ffd701]';
    return 'text-white';
  };

  const wearFullWord = (tag1) => {
    if (tag1 == "Agent") return `${item.tag6} Agent`;
    if (tag1 == "Container") return `Base Grade ${item.tag2}`;
    if (tag1 == "Sticker") return `${item.tag6} Sticker`;
    if (tag1 == "Collectible") return `${item.tag6} Collectible`;
    if (tag1 == "Music Kit") return `${item.tag6} Music Kit`;
    if (tag1 == 'fn') return 'Factory New';
    if (tag1 == 'mw') return 'Minimal Wear';
    if (tag1 == 'ft') return 'Field Tested';
    if (tag1 == 'ww') return 'Well Worn';
    if (tag1 == 'bs') return 'Battle Scarred';
    return '';

  }
  return (
    <div className="h-full border-2 border-transparent rounded-lg shadow-sm bg-gray-800 hover:translate-y-[-15px] hover:border-gray-700 transition-all duration-300 cursor-pointer">
      <div className='relative overflow-hidden'>
        <img
          className="relative rounded-t-lg w-50 mx-auto z-5"
          src={`${item.image}`}
          alt={item.marketname + ' icon'}
        />
        <div
          className={"absolute top-0 left-0 w-full h-full"}
          style={{ backgroundImage: `linear-gradient(to top, var(--${item.color.toUpperCase()}50), transparent)` }}
        ></div>
        <div className={`absolute -bottom-0.5 w-full h-[5px] z-10`} style={{ background: `var(--${item.color.toUpperCase()})` }}></div>
      </div>
      <div className="p-5">
        <h5 className={`mb-2 text-lg font-bold tracking-tight truncate ${getItemClass(item.quality)}`} title={(item.tag1 == "Knife" || item.tag1 == "Gloves") ? "★ " + item.tag2 + ' | ' + item.tag3 : '' + item.tag2 + ' | ' + item.tag3}>{(item.tag1 == "Knife" || item.tag1 == "Gloves") ? "★ " + item.tag2 + ' | ' + item.tag3 : '' + item.tag2 + ' | ' + item.tag3}</h5>
        <p className="mb-3 font-normal text-gray-400">
          <span className={`${getItemClass(item.quality)}`}>{((item.quality != 'Normal' && item.quality != "★") ? item.quality : '')}</span>{' ' + wearFullWord(item.tag1) + wearFullWord(item.wear)}
        </p>
        <p className="mb-3 font-normal text-white">
          <i className="mr-3 fa-brands fa-steam-symbol"></i>{item.pricereal?.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' €'}
        </p>
        {item.inspectlink && <a href={item.inspectlink} className='text-white bg-gray-500/30 hover:bg-gray-300/30 px-3 py-1 rounded-xl' title='Inspect in game'><i className="fa-regular fa-eye"></i></a>}
        {item.tag1 != "Agent" && item.descriptions
          .filter(description => description.name === "sticker_info")
          .map(description => (
            <span key={description.value} dangerouslySetInnerHTML={{ __html: description.value }} />
          ))}


      </div>
    </div >
  )
}

export default Card