import React from "react";

const Button = ({children}) =>{
    return(
        <div>
            <button type="button">
                {children}
            </button>
        </div>
    )
}

export default Button;