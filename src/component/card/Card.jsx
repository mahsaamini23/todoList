import React from "react";
import "./card.style.scss";
import {todos} from "../../database/database";


const Card =()=>{
    return(
        <div className="card">
            {todos.map(todo => (
                <div key={todo.id}>
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