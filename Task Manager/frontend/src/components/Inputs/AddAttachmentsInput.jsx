import React from "react";
import { HiMiniPlus, HiOutlineTrash } from "react-icons/hi2";
import { LuPaperclip } from "react-icons/lu";
import { useState } from "react";

function AddAttachmentsInput({ attachments, setAttachments }) {
  const [option, setOption] = useState("");

  // Function to handle adding an option
  const handleAddOption = () => {
    if (option.trim()) {
      setAttachments([...attachments, option.trim()]);
      setOption("");
    }
  };

  // Function to handle deleting an option
  const handleDeleteOption = (index) => {
    const updatedArr = attachments.filter((_, idx) => idx !== index);
    setAttachments(updatedArr);
  };

  return (
    <div>
      {attachments.map((item, index) => (
        <div
          key={item}
          className="flex bg-gray-50 border border-gray-100 justify-between items-center py-2 px-3 rounded-md"
        >
          <div className="flex-1 flex items-center gap-3 border-r border-gray-100 pr-3">
            <LuPaperclip className=" text-gray-400" />
            <p className="text-xs text-black">{item}</p>
          </div>
          <button
            className="cursor-pointer"
            onClick={() => handleDeleteOption(index)}
          >
            <HiOutlineTrash className="text-lg text-red-500" />
          </button>
        </div>
      ))}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 flex items-center gap-3 border-r border-gray-100 rounded-md px-3">
          <LuPaperclip className="text-gray-400" />
          <input
            type="text"
            placeholder="Add File Link"
            value={option}
            onChange={({ target }) => setOption(target.value)}
            className="w-full text-[13px] text-black outline-none bg-white py-2 rounded-md"
          />
          <button className="card-btn text-nowrap" onClick={handleAddOption}>
            <HiMiniPlus className="text-lg" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAttachmentsInput;
