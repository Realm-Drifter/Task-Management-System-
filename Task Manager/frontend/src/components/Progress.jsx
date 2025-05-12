import React from "react";

function Progress({ progress, status }) {
  const getColor = () => {
    switch (status) {
      case "In Progress":
        return "bg-cyan-500 text-cyan-500 border border-cyan-500/10";
      case "Completed":
        return "text-indigo-500 bg-indigo-50 border border-indigo-500/10";
      default:
        return "text-violet-500 bg-violet-50 border border-violet-500/10";
    }
  };

  return (
    <div className="bg-gray-200 rounded-full h-1.5">
      <div
        style={{ width: `${progress}%` }}
        className={`${getColor()} rounded-full h-1.5 text-center text-xs font-medium`}
      ></div>
    </div>
  );
}

export default Progress;
