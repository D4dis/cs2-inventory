import React, { useState } from 'react'

const Accordion = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-4 gap-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 font-medium text-white hover:text-blue-800 transition-all gap-3 cursor-pointer bg-transparent hover:bg-transparent"
      >
        {title}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`w-full transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        {children}
      </div>
    </div>
  )
}

export default Accordion