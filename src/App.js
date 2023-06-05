import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={Home} />
        <Route path="/dashboard" element={Dashboard} />
        <Route path="/login" element={Login} />
        <Route path="/signup" element={Signup} />
      </Routes>
    </div>
  )
}

export default App;