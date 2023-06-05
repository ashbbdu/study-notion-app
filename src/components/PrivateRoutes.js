import React, { Children } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = ({ children, isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? children : <Navigate to="/login" />}
        </div>
    )
}

export default PrivateRoute