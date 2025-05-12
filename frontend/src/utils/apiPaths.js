export const BASE_URL = "http://localhost:8000/";

//utils/apiPaths.js
export const API_PATHS = {
  // Authentication endpoints
  AUTH: {
    REGISTER: "/api/auth/register", //to regester a new user
    LOGIN: "/api/auth/login", //authinticate the user
    GET_PROFILE: "/api/auth/profile", // login to user profile
  },

  // User management endpoints
  USERS: {
    GET_ALL_USERS: "/api/users", //so admin can get all users

    GET_USERS_BY_ID: (userId) => `api/users/${userId}`,

    CREATE_USER: "/api/users", // create a new user (admin)

    UPDATE_USER: (userId) => `/api/users/${userId}`, //update user details

    DELETE_USER: (userId) => `/api/users/${userId}`,
  },

  // Task management endpoints
  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data",
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data",
    GET_ALL_TASKS: "/api/tasks",
    GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`,
    CREATE_TASK: "/api/tasks",
    UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`,
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`,

    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`,
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`,
  },

  // Reports endpoints
  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks",
    EXPORT_USERS: "/api/reports/export/users",
  },

  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image",
  },
};

export default API_PATHS;
