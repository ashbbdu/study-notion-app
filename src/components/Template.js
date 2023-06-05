import React from "react";

const Template = ({title , desc1 , desc2 , image , formType , isLoggedIn}) => {
    // formType is which type of form login or signup
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>{desc1}</p>
                <p>{desc2}</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Template;