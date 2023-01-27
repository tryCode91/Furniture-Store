import React from "react"
import { Navigate, Outlet } from "react-router-dom";
import "../App.css"

const PrivateRoutes = () => {
    let token = sessionStorage.getItem("accessToken") == null ? false : true;

  return (
    <>
       {token ? <Outlet  /> : <Navigate to="/signin" />}
    </>
  )
};

export default PrivateRoutes;
