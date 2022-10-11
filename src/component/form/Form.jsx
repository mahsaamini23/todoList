import React from "react";
import "./form.style.css";

const Form = () =>{
    return(
        <div className="form">
            <div className="form_container">
                <div className="container_title"> 
                    <label className="form_label">Title : </label>
                    <input className="input" type="text" name="title"/>
                </div>
                <div className="container_description">
                    <label className="form_label">Description : </label>
                    <input className="input" type="text" name="description"/>
                </div>
            </div>
            <button type="submit" className="btn_submit">Add to list</button>
        </div>
    )
}

export default Form;