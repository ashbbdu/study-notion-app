import React from "react";
import Template from "../components/Template";
import signupImage from "../assets/signup.png"

const Signup = ({}) => {
    return (
        <div>
        <Template formType="signup" title="Join the millions learning to code with StudyNotion for free" desc1="Build skills for today, tomorrow, and beyond." desc2="Education to future-proof your career." image={signupImage} isLoggedIn={false} />
    </div>
    )
}

export default Signup;