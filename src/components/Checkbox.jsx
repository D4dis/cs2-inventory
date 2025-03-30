import { useState } from "react";

const CustomCheckbox = ({ id, text }) => {
  const [checked, setChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Bulle autour de l'input */}
      <div
        className={`relative w-6 h-6 flex items-center justify-center rounded-full
          transition-all duration-300 cursor-pointer
          ${isHovered ? "bg-gray-300" : ""}
          ${checked ? "bg-blue-600" : "bg-transparent"}
        `}
        onClick={toggleCheck}
        onMouseEnter={() => setIsHovered(true)} // Quand la souris entre dans la zone
        onMouseLeave={() => setIsHovered(false)} // Quand la souris quitte la zone
      >
        {/* Checkbox visible */}
        <input
          id={id}
          type="checkbox"
          className="w-6 h-6 opacity-0 absolute cursor-pointer"
          checked={checked}
          onChange={toggleCheck}
        />

        {/* Checkmark SVG quand sélectionné */}
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* Label */}
      <label htmlFor={id} className="text-sm font-semibold cursor-pointer">
        {text}
      </label>
    </div>
  );
}

export default CustomCheckbox;