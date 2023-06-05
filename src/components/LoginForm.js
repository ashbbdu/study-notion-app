import React, { useState } from "react";

const LoginForm = () => {
    const [formData , setFormData] = useState({
        email : "",
        password : ""
    })

    const changeHandler = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }
    return (
        <div>
            <form className="flex flex-col">
                <label htmlFor="email">Email Address<sup>*</sup></label>
                <input type="email" required name="email" id="email" placeholder="Enter Email Address" onChange={changeHandler} value={formData.email} />
                <label htmlFor="password">Email Address<sup>*</sup></label>
                <input type="password" required name="password" id="password" placeholder="Enter Password" onChange={changeHandler} value={formData.password} />
            </form>
        </div>
    )
}

export default LoginForm;