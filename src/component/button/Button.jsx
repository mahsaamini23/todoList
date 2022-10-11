import React from "react";
import "./button.style.css";

const Button = ({children}) =>{
    return(
        <div>
            <button type="button" className="btn">
                {children}
            </button>
        </div>
    )
}

export default Button;