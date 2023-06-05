import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import frame from "../assets/frame.png"

const Template = ({title , desc1 , desc2 , image , formType , isLoggedIn , setIsLoggedIn}) => {
    // formType is which type of form login or signup
    return (
        <div  className="grid grid-cols-1 max-w-[1080px] mx-auto sm:grid-cols-2  ">
            <div className="p-10 ">
                <h1 className="text-white my-1">{title}</h1>
                <p className="text-white my-1">{desc1}</p>
                <p className="text-white my-1">{desc2}</p>
                <div>
                    {
                        formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm  setIsLoggedIn={setIsLoggedIn} />
                    }
            </div>
            </div>
           
            {/* div for image */}
            <div className="p-10">
                <img src={image} alt="form-image"  />
                {/* <img src={frame} /> */}
            </div>
        </div>
    )
}

export default Template;