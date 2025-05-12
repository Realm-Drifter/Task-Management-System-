import React, { useState, useEffect } from "react";
import DashboardLayout from "./../../components/layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./../../utils/axiosInstance";
import API_PATHS from "./../../utils/apiPaths";
import { LuFileSpreadsheet } from "react-icons/lu";
import TaskStatusTabs from "./../../components/TaskStatusTabs";
import TaskCard from "./../../components/Cards/TaskCard";
import toast from "react-hot-toast";

function ManageTasks() {
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

      // Assuming response.data.statusSummary is available and has the counts
      const apiStatusSummary = response.data?.statusSummary || {};
      const statusSummaryData = [
        { label: "All", count: apiStatusSummary.all || 0 },
        { label: "Pending", count: apiStatusSummary.pendingTasks || 0 },
        { label: "In Progress", count: apiStatusSummary.inProgressTasks || 0 },
        { label: "Completed", count: apiStatusSummary.completedTasks || 0 },
      ];

      setTabs(statusSummaryData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleClick = (taskData) => {
    navigate(`/admin/create-task`, { state: { taskId: taskData._id } });
  };

  //download task report
  const handleDownloadReport = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.REPORTS.EXPORT_TASKS, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "task_details.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading report", error);
      toast.error("Error downloading report");
    }
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
          <h2 className="text-xl md:text-xl font-medium">Manage Tasks</h2>

          <div className="flex flex-col items-start gap-3 mt-4 lg:mt-0 lg:flex-row lg:items-center">
            {tabs?.[0]?.count > 0 && (
              <TaskStatusTabs
                tabs={tabs}
                activeTab={filterStatus}
                setActiveTab={setFilterStatus}
              />
            )}
            <button
              className="flex items-center download-btn"
              onClick={handleDownloadReport}
            >
              <LuFileSpreadsheet className="text-lg " />
              Download Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {allTasks?.map((item, index) => (
            <TaskCard
              key={item._id}
              title={item.title}
              description={item.description}
              priority={item.priority}
              status={item.status}
              progress={item.progress}
              createdAt={item.createdAt}
              dueDate={item.dueDate}
              assignedTo={item.assignedTo?.map((user) => user.profileImageUrl)}
              attachmentCount={item.attachmentCount?.length || 0}
              completedTodoCount={item.completedTodoCount || 0}
              todoChecklist={item.todoChecklist || []}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ManageTasks;
