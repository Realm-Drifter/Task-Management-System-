import React, { useState } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi";

function TodoListInput({ todoList, setTodoList }) {
  const [option, setOption] = useState("");

  const handleAddOption = () => {
    if (option.trim()) {
      setTodoList([...todoList, option.trim()]);
      setOption("");
    }
  };

  const handleDeleteOption = (index) => {
    const updatedArr = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedArr);
  };

  return (
    <div>
      {todoList.map((item, index) => (
        <div
          key={item}
          className="flex bg-gray-50 border border-gray-100 justify-between items-center py-2 px-3 rounded-md"
        >
          <p className="text-xs text-black">
            <span className="text-xs text-gray-500 font-semibold mr-2">
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>
            {item}
          </p>
          <button
            className="cursor-pointer"
            onClick={() => handleDeleteOption(index)}
          >
            <HiOutlineTrash className="text-lg text-red-500" />
          </button>
        </div>
      ))}

      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter Task"
          value={option}
          onChange={({ target }) => setOption(target.value)}
          className="w-full text-[13px] text-black outline-none bg-white py-2 px-3 border border-gray-100 rounded-md"
        />
        <button className="card-btn text-nowrap" onClick={handleAddOption}>
          <HiMiniPlus className="text-lg" /> Add
        </button>
      </div>
    </div>
  );
}

export default TodoListInput;
