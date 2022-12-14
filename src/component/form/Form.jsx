import React from "react";
import "./form.style.css";
import { useSelector, useDispatch } from "react-redux";
import {AddItem , EditItem} from "../../features/todo/todoSlice";

const Form = ({form , setForm, todo, setTodo , mode, setMode}) =>{
    const card = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    const handelSubmit = (e)=>{
        e.preventDefault();
        if(mode){
            dispatch(AddItem(form))
        }else{
            dispatch(EditItem(form))
        }
        setForm({id:"" , title:"" , description:"" , status:""})
        setMode(true)
        // if(mode){
        //     setTodo([...todo , {id:Math.floor(Math.random()*1000), title:form.title , description:form.description , status:false}]);
        // }else{
        //     setTodo(todo.map(item=> item.id === form.id ? form: item));
        // }
    }

    const handelChange =(e)=>{
        setForm({...form , [e.target.name] : e.target.value});
    }
    return(
        <form  onSubmit={handelSubmit}  className="form">
            <div   className="form_container">
                <div className="container_title"> 
                    <label className="form_label">Title : </label>
                    <input className="input" type="text" name="title"value={form.title} onChange={handelChange}/>
                </div>
                <div className="container_description">
                    <label className="form_label">Description : </label>
                    <input className="input" type="text" name="description" value={form.description} onChange={handelChange}/>
                </div>
            </div>
            <button type="submit" className="btn_submit">{mode===true ? "Add to list": "Edit item"}</button>
        </form>
    )
}

export default Form;