import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate()

    const changeHandler = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        navigate("/dashboard");
        toast.success("Logged In Successfully !")
        setIsLoggedIn(true)
    }  

    return (
        <div>
            <form className="flex flex-col" onSubmit={submitFormHandler}>
                <label htmlFor="email">Email Address<sup>*</sup></label>
                <input type="email" required name="email" id="email" placeholder="Enter Email Address" onChange={changeHandler} value={formData.email} />
                <label htmlFor="password">Password<sup>*</sup></label>
                <input type="password" required name="password" id="password" placeholder="Enter Password" onChange={changeHandler} value={formData.password} />
                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm;