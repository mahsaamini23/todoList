import React from "react";
import {todos} from "../../database/database";
import Button from "../button/Button";
import "./card.style.css";
import { ReactComponent as Delete } from "../../assets/svg/delete_icon.svg";
import { ReactComponent as Edit } from "../../assets/svg/edit_icon.svg";

const Card =({search})=>{

    return(
        <div className="container_card">
            {todos.filter(todo => search === "" ? todo : todo.title.toLowerCase().includes(search.toLowerCase() ))
            .map(todo => (
                <div key={todo.id} className="card">
                    <div className="card_title">
                        <input type="checkbox"/>
                        <h3 className="title">{todo.title}</h3>
                    </div>
                    <p className="card_description">{todo.description}</p>
                    <p>{todo.status}</p>
                    <div className="card_btn">
                        <Button className="btn"><Delete className="btn_delete"/></Button>
                        <Button  className="btn"><Edit  className="btn_edit"/></Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;