import React from "react";

const DeleteAlert = ({ content, onDelete, onCancel }) => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-white">{content}</p>
      <div className="flex justify-end gap-2 mt-6">
        <button
          type="button"
          onClick={onDelete}
          className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-rose-500 whitespace-nowrap bg-rose-50 border border-rose-100 px-4 py-2 rounded-lg cursor-pointer"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
