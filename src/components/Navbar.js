import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <div className="flex items-center justify-evenly ">
            <Link to="/">
                <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex gap-3">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div >
                {
                    !isLoggedIn && <div className="space-x-4"><Link to="/login">Login</Link>
                        <Link  to="/signup" >Signup</Link></div>
                }

                {isLoggedIn && <div className="space-x-4">  <Link to="/dashboard">Dashboard</Link>
                    <Link to="/" onClick={() => {
                        setIsLoggedIn(false)
                        toast.success("Logged out")
                    }

                    }>Logout</Link></div>}


            </div>
        </div>
    )
}

export default Navbar;