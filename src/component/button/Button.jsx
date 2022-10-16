import React from "react";
import "./button.style.css";

const Button = ({children,onClick}) =>{
    return(
        <div>
            <button type="button" className="btn" onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button;