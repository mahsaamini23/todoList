import React from "react";
import {todos} from "../../database/database";
import "./card.style.css";


const Card =()=>{
    return(
        <div className="container_card">
            {todos.map(todo => (
                <div key={todo.id} className="card">
                    <input type="checkbox"/>
                    <h3 className="card_title">{todo.title}</h3>
                    <p className="card_description">{todo.description}</p>
                    <button className="btn_delete">delete</button>
                    <button className="btn_edit">Edit</button>
                </div>
            ))}
        </div>
    )
}

export default Card;