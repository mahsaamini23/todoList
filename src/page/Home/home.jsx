import React,{useState} from "react";
import Card from "../../component/card/Card";
import Search from "../../component/search/Search";
import Form from "../../component/form/Form";
// import {todos} from "../../db/db";

const todos=[
    {id:1, title:"buy milk", description:"description", status:"Not to do"},
    {id:2, title:"study book", description:"description", status:"Not to do "},
    {id:3, title:"back mite", description:"description", status:"Not to do"},
    {id:4, title:"progamming react", description:"description", status:"Not to do"},
]

const Home = ()=>{
    const [filterItem, setFilterItem] = useState("All")

    const [search,setSearch] = useState("");
    const [form,setForm] = useState({id:"", title:"" ,description:"", status:false}) 
    const [todo,setTodo] = useState();
    const [mode ,setMode] = useState(true);

    return(
        <div className="home">
            <Search setSearch={setSearch} setFilterItem={setFilterItem}/>
            <Form form={form} setForm={setForm} todo={todo} setTodo={setTodo} mode={mode} setMode={setMode}/>
            <Card search={search} setForm={setForm} setMode={setMode} filterItem={filterItem}/>
        </div>
    )
}

export default Home;