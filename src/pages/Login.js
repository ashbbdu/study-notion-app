import React from "react";
import Template from "../components/Template";
import loginImage from "../assets/login.png"

const Login = () => {
    return (
        <div>
            <Template formType="login" title="Welcome Back" desc1="Build skills for today, tomorrow, and beyond." desc2="Education to future-proof your career." image={loginImage} isLoggedIn={false} />
        </div>
    )
}

export default Login;