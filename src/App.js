import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import  { Toaster } from 'react-hot-toast';
import PrivateRoute from "./components/PrivateRoutes";
function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  return (
    <div className="bg-richblack-900 min-h-screen">

    
    <div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Navbar isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn}/>

     <div className="mt-[110px]">
     <Routes>
        <Route path="/" element={<Home />} />
        
       <Route path="/dashboard" element={ 
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard />
          </PrivateRoute>
       } />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        
      </Routes>
     
     </div>
      </div>
    </div>
  )
}

export default App;
