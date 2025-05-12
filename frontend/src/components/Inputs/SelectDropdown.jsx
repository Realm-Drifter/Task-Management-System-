import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const SelectDropdown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button */}
      <button
        className="w-full text-sm px-2.5 py-3 text-black outline-none  font-medium bg-white border border-slate-100 rounded-md mt-2 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value
          ? options.find((opt) => opt.value === value)?.label
          : placeholder}
        <span className="ml-2">
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </span>
      </button>

      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border border-slate-100 rounded-md shadow-md z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="px-3 py-2 text-sm  cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
