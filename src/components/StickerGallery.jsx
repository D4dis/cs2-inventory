import React, { useEffect, useState } from 'react'

const StickerGallery = ({ stickers }) => {
  const [sticker, setSticker] = useState([]);

  const parseStickers = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const images = doc.querySelectorAll("#sticker_info img");

    return Array.from(images).map((img) => ({
      src: img.src,
      title: img.title,
    }));
  };

  useEffect(() => {
    setSticker(parseStickers(stickers));
  }, []);

  return (
    <div className='flex gap-3 mt-3'>
      {sticker.map((sticker, index) => (
        <div key={index}>
          <img src={sticker.src} alt={sticker.title} title={sticker.title} className='w-10 hover:scale-200 transition-all duration-300' />
        </div>
      ))}
    </div>
  )
}

export default StickerGallery