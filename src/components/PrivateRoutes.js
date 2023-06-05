import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = ({ path, element, isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <Routes>
                <Route path="/dashboard" element={element} />
            </Routes> : <Navigate to="/" />}
        </div>
    )
}

export default PrivateRoute