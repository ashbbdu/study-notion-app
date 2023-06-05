import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
   const [role , setRole] = useState("student")
    const [formData , setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
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
        if(formData.password !== formData.confirmPassword ){
            toast.error("Password Did Not Match !!")
        }
        else {
            navigate("/dashboard");
            toast.success(`Signed up as ${role} Successfully !`)
            setIsLoggedIn(true)
        }
      
    }  
    return (
        <div className="">
         <div className="text-white space-x-2">
         <button className={role === "student" ? "active" : ""} onClick={() => setRole("student")}>Student</button>
            <button  className={role === "instructor" ? "active" : ""}  onClick={() => setRole("instructor")} >Instructor</button>
         </div>
            <form className="flex flex-col mt-4" onSubmit={submitFormHandler}>
                <div className="grid grid-cols-2">
                <label htmlFor="firstName">First Name<sup>*</sup></label>
                <label htmlFor="lastName" className="ml-2">Last Name<sup>*</sup></label>
                <input type="text" required name="firstName" id="firstName" placeholder="Enter First Name" onChange={changeHandler} value={formData.firstName} />
                
                <input type="text"  className="ml-2" required name="lastName" id="lastName" placeholder="Enter Last Name" onChange={changeHandler} value={formData.lastName} />
                </div>
                <label htmlFor="email" className="mt-4">Email Address<sup>*</sup></label>
                <input type="email" required name="email" id="email" placeholder="Enter Email Address" onChange={changeHandler} value={formData.email} />
                <div className="grid grid-cols-2 mt-4">
                <label htmlFor="password">Create Password<sup>*</sup></label>
                <label htmlFor="confirmPassword"  className="ml-2">Confirm Password<sup>*</sup></label>
                <input type="password" required name="password" id="password" placeholder="Enter Password" onChange={changeHandler} value={formData.password} />

                
                <input type="password"  className="ml-2" required name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={changeHandler} value={formData.confirmPassword} />
                </div>
                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign In</button>
            </form>
        </div>
    )
}

export default SignupForm;