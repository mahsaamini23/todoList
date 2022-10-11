import React from "react";
import {todos} from "../../database/database";
import Button from "../button/Button";
import "./card.style.css";
import { ReactComponent as Delete } from "../../assets/svg/delete_icon.svg";
import { ReactComponent as Edit } from "../../assets/svg/edit_icon.svg";

const Card =()=>{
    return(
        <div className="container_card">
            {todos.map(todo => (
                <div key={todo.id} className="card">
                    <div className="card_title">
                        <input type="checkbox"/>
                        <h3 className="title">{todo.title}</h3>
                    </div>
                    <p className="card_description">{todo.description}</p>
                    <p>status</p>
                    <div className="card_btn">
                        <Button><Delete/></Button>
                        <Button><Edit/></Button>
                        {/* <button className="btn_delete"></button> */}
                        {/* <button className="btn_edit"></button> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;