import React from "react";
import {todos} from "../../database/database";


const Card =()=>{
    return(
        <div>
            {todos.map(todo => (
                <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <button>delete</button>
                    <button>Edit</button>
                </div>
            ))}
            
        </div>
    )
}

export default Card;