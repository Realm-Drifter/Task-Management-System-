import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";

function PrivateRoute({ allowedRoles }) {
  return <Outlet />;
}

export default PrivateRoute;
