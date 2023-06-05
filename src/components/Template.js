import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import frame from "../assets/frame.png"

const Template = ({title , desc1 , desc2 , image , formType , isLoggedIn}) => {
    // formType is which type of form login or signup
    return (
        <div  className="grid grid-cols-2 ">
            <div>
                <h1>{title}</h1>
                <p>{desc1}</p>
                <p>{desc2}</p>
                <div>
                    {
                        formType === "signup" ? <SignupForm /> : <LoginForm />
                    }
            </div>
            </div>
           
            {/* div for image */}
            <div>
                <img src={image} alt="form-image"  />
                <img src={frame} />
            </div>
        </div>
    )
}

export default Template;