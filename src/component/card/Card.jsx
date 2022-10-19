import React,{useState} from "react";
import Button from "../button/Button";
import "./card.style.css";
import { ReactComponent as Delete } from "../../assets/svg/delete_icon.svg";
import { ReactComponent as Edit } from "../../assets/svg/edit_icon.svg";
import { useSelector, useDispatch } from "react-redux";
import {AddItem, DeleteItem, EditItem, CheckItem} from "../../features/todo/todoSlice";


const Card =({search,setForm,setMode,filterItem})=>{
    const card = useSelector((state)=>state.todo);
    const dispatch = useDispatch();


    const handelEdit = (item) =>{
        dispatch(EditItem(item))
        setMode(false);
        setForm(item);
    }
    
    const handelDelete = (id) =>{
        dispatch(DeleteItem(id))
    }

    const handelCheck = (id)=>{
        dispatch(CheckItem(id))
    }
 
    return(
        <div className="container_card">
            {card.filter(t => search === "" ? t : t.title.toLowerCase().includes(search.toLowerCase())&&(filterItem==="All" ? true : t.status === filterItem))
            .map(item => (
                <div key={item.id} className="card">
                    <div className="card_title">
                        <input type="checkbox"  onClick={()=>handelCheck(item.id)} />
                        <h3 className="title">{item.title}</h3>
                    </div>
                    <p className="card_description">{item.description}</p>
                    <p>{item.status ? "To do" : "Not to do"}</p>
                    <div className="card_btn">
                        <Button className="btn" onClick={()=>handelDelete(item.id)}><Delete className="btn_delete"/></Button>
                        <Button  className="btn" onClick={()=>handelEdit(item)}><Edit  className="btn_edit"/></Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;