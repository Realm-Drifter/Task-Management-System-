import React from "react";
import Progress from "../Progress";
import AvatarGroup from "../AvatarGroup";
import { LuFileSpreadsheet } from "react-icons/lu";
import moment from "moment";

function TaskCard({
  title,
  description,
  priority,
  status,
  progress,
  createdAt,
  dueDate,
  assignedTo,
  attachmentCount,
  completedTodoCount,
  todoChecklist,
  onClick,
}) {
  const getStatusTagColor = () => {
    switch (status) {
      case "In Progress":
        return "text-cyan-500 bg-cyan-50 border-cyan-500/10";
      case "Completed":
        return "text-lime-500 bg-lime-50 border-lime-500/20";

      default:
        return "text-violet-500 bg-violet-50 border-violet-500/10";
    }
  };

  const getPriorityTagColor = () => {
    switch (priority) {
      case "Low":
        return "text-emerald-500 bg-emerald-50 border-emerald-500/10";
      case "Medium":
        return "text-amber-500 bg-amber-50 border-amber-500/10";

      default:
        return "text-rose-500 bg-rose-50 border-rose-500/10";
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md py-4 shadow-gray-100 border-gray-200/50 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 px-4">
        <div
          className={`text-[11px] font-medium ${getStatusTagColor()} rounded-full px-4 py-0.5`}
        >
          {status}
        </div>

        <div
          className={`text-[11px] font-medium ${getPriorityTagColor()} rounded-full px-4 py-0.5`}
        >
          {priority}
        </div>
      </div>

      <div
        className={`px-4 border-l-[3px] ${
          status === "In Progress"
            ? "border-cyan-500"
            : status === "Completed"
            ? "border-indigo-500"
            : "border-violet-500"
        }`}
      >
        <p className="text-sm font-medium text-gray-800 mt-4 line-clamp-2">
          {title}
        </p>
        <p className="text-xs text-gray-500 mt-1.5 leading-[18px] line-clamp-2">
          {description}
        </p>
        <p className="text-[13px] text-gray-700/80 font-medium mt-2 mb-2 leading-[18px]">
          Task Done:{" "}
          <span className="font-semibold text-gray-700">
            {completedTodoCount} / {todoChecklist.length || 0}
          </span>
        </p>

        <Progress progress={progress} status={status} />
      </div>

      <div className="flex items-center gap-2 px-4">
        <div className="flex items-center justify-start flex-1 min-w-0 my-1">
          <label className="text-xs text-gray-500 whitespace-nowrap">
            Start Date:&nbsp;
          </label>
          <p className="text-[13px] text-gray-900 font-medium truncate">
            {moment(createdAt).format("DD MMM YYYY")}
          </p>
          <label className="text-xs text-gray-500 ml-6 whitespace-nowrap">
            Due Date:&nbsp;
          </label>
          <p className="text-[13px] text-gray-900 font-medium truncate">
            {moment(dueDate).format("DD MMM YYYY")}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 px-4">
        <AvatarGroup avatars={assignedTo || []} />

        {attachmentCount > 0 && (
          <div className="flex items-center gap-2 bg-blue-50 px-2.5 py-1.5 rounded-lg">
            <LuPaperclip className="text-primary" />
            <p className="text-xs text-gray-900">{attachmentCount}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
