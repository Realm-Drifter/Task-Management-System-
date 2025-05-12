import React from "react";
const UserCard = ({ userInfo }) => {
  return (
    <div className="user-card p-2">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <img
            src={userInfo?.profileImageUrl || null}
            alt="user"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <p className="text-sm font-medium">{userInfo?.name}</p>
            <p className="text-sm text-gray-500">{userInfo?.email}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 mt-3 pt-2 border-t border-gray-100">
          <StatCard
            label="Pending"
            count={userInfo?.pendingTasks || 0}
            status="Pending"
          />
          <StatCard
            label="In Progress"
            count={userInfo?.inProgressTasks || 0}
            status="In Progress"
          />
          <StatCard
            label="Completed"
            count={userInfo?.completedTasks || 0}
            status="Completed"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;

const StatCard = ({ label, count, status }) => {
  const getStatusTagColor = () => {
    switch (status) {
      case "In Progress":
        return "text-cyan-500 bg-gray-50";
      case "Completed":
        return "text-indigo-500 bg-gray-50";
      default:
        return "text-violet-500 bg-gray-50";
    }
  };

  return (
    <div
      className={`flex-1 text-[10px] font-medium text-center ${getStatusTagColor()} px-2 py-0.5 rounded`}
    >
      <span className="text-[12px] font-semibold">{label}</span> <br /> {count}
    </div>
  );
};
