import React, { useState, useEffect } from "react";
import DashboardLayout from "./../../components/layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./../../utils/axiosInstance";
import API_PATHS from "./../../utils/apiPaths";
import { LuFileSpreadsheet } from "react-icons/lu";
import TaskStatusTabs from "./../../components/TaskStatusTabs";
import TaskCard from "./../../components/Cards/TaskCard";

function MyTasks() {
  const [allTasks, setAllTasks] = useState([]);

  const [tabs, setTabs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const navigate = useNavigate();

  const getAllTasks = async (status) => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_ALL_TASKS, {
        params: { status: filterStatus === "All" ? "" : filterStatus },
      });

      setAllTasks(response.data?.tasks?.length > 0 ? response.data?.tasks : []);

      //Map statusSummary data with fixed labels and order
      const backendStatusSummary = response.data.statusSummary;
      const statusSummary = [
        { label: "All", count: backendStatusSummary.all || 0 },
        { label: "Pending", count: backendStatusSummary.pendingTasks || 0 },
        {
          label: "In Progress",
          count: backendStatusSummary.inProgressTasks || 0,
        },
        { label: "Completed", count: backendStatusSummary.completedTasks || 0 },
      ];

      setTabs(statusSummary);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleClick = (taskId) => {
    navigate(`/user/task-details/${taskId}`);
  };

  useEffect(() => {
    getAllTasks(filterStatus);
    return () => {
      setAllTasks([]);
    };
  }, [filterStatus]);

  const handleDelete = async (taskId) => {};

  return (
    <DashboardLayout activeTab="Manage Tasks">
      <div className="my-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between ">
          <h2 className="text-xl md:text-xl font-medium">My Tasks</h2>

          {tabs?.[0]?.count > 0 && (
            <TaskStatusTabs
              tabs={tabs}
              activeTab={filterStatus}
              setActiveTab={setFilterStatus}
            />
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {allTasks?.map((item, index) => {
            return (
              <TaskCard
                key={item._id}
                title={item.title}
                description={item.description}
                priority={item.priority}
                status={item.status}
                progress={item.progress}
                createdAt={item.createdAt}
                dueDate={item.dueDate}
                assignedTo={item.assignedTo?.map(
                  (item) => item.profileImageUrl
                )}
                attachmentCount={item.attachmentCount?.length || 0}
                completedTodoCount={item.completedTodoCount || 0}
                todoChecklist={item.todoChecklist || []}
                onClick={() => handleClick(item._id)}
              />
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MyTasks;
