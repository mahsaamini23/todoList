import React, { useState } from "react";
import './App.css';

const item = [{id:1, name:"apple",description:"buy apple", state:"false"},
              {id:2, name:"milk", description:"buy milk", state:"true"},
              {id:3, name:"orange",description:"buy orange", state:"false"}];
function App() {
  const[todo , setTodo] = useState(item);
  const[form , setForm] = useState({title:"",description:""});
  const[mode , setMode] = useState("add");

  const handelSubmit = (e) =>{
    e.preventDefault();
    if(mode==="add"){
      setTodo([...todo , {id:Math.floor((Math.random()*1000)-1) , title: form.title , description: form.description , state:false}]);
    }else if(mode==="update"){
      setTodo(todo.map(item =>item.id ===form.id ? form :item))
    }
    setForm({title:"",description:""});
    setMode("add")
  }
  const handelChange = (e) => {
    setForm({...form , [e.target.name]:e.target.value});
    console.log([e.target.name], e.target.value)
  }
  const handelDelete =(id) => {
    setTodo(todo.filter(item => item.id !== id));
  }
  const handelUpdate =(item)=>{
    setMode("update")
    setForm(item);
  }
  const handelState = (id)=>{
    setTodo(todo.map(item => item.id === id ? {...item, state: !item.state} : item));
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        title:
        <input name="title" type="text" value={form.title} onChange={handelChange} ></input>
        description: 
        <input name="description" type="text" value={form.description} onChange={handelChange}></input>
        <button type="submit">{mode === "add" ? "submit" : "update"}</button>
      </form>
      {todo.map(item=>(
        <div style={{border:"1px solid black"}}>
          <div>id:{item.id}</div>
          <div>name:{item.name}</div>
          <div>description:{item.description}</div>
          <div onClick={()=>handelState(item.id)} style={{cursor:"pointer"}}>state:{item.state === true ? "done" :" not done"}</div>
          <button type="button" onClick={() => handelDelete(item.id)}>Delete</button>
          <button type="button" onClick={() => handelUpdate(item)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default App;
