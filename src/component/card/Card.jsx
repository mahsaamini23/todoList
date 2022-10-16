import React from "react";
import Button from "../button/Button";
import "./card.style.css";
import { ReactComponent as Delete } from "../../assets/svg/delete_icon.svg";
import { ReactComponent as Edit } from "../../assets/svg/edit_icon.svg";
 

const Card =({search,todo,setTodo,setForm,setMode,filter})=>{
    const handelDelete = (id) =>{
        console.log(id);
        setTodo(todo.filter(item => item.id !== id ))
    } 
    const handelEdit = (item) =>{
        setMode(false);
        setForm(item);
    }

    const handelCheck = (id) => {
        setTodo(todo.map(item=>item.id===id ? {...item , status:!item.status} : item));
    }
 
    return(
        <div className="container_card">
            {todo.filter(t => search === "" ? t : t.title.toLowerCase().includes(search.toLowerCase())&&(filter==="All" ? true : t.status === filter))
            .map(item => (
                <div key={item.id} className="card">
                    <div className="card_title">
                        <input type="checkbox" onClick={()=>handelCheck(item.id)}/>
                        <h3 className="title">{item.title}</h3>
                    </div>
                    <p className="card_description">{item.description}</p>
                    <p >{item.status ?"not to do":"to do"}</p>
                    <div className="card_btn">
                        <Button className="btn" onClick={()=>handelDelete(item.id)}><Delete className="btn_delete"/></Button>
                        <Button  className="btn" onClick={()=>handelEdit(item.id)}><Edit  className="btn_edit"/></Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;