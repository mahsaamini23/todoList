import React from "react";
import {todos} from "../../database/database";
import "./card.style.css";


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
                        <button className="btn_delete">delete</button>
                        <button className="btn_edit">Edit</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;