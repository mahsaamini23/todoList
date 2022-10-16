import React,{useState} from "react";
import Card from "../../component/card/Card";
import Search from "../../component/search/Search";
import Form from "../../component/form/Form";
import {todos} from "../../db/db";

const Home = ()=>{
    const [filter, setFilter] = useState("All")

    const [search,setSearch] = useState("");
    const [form,setForm] = useState({id:"", title:"" ,description:"", status:"not to do"})
    const [todo,setTodo] = useState(todos);
    const [mode ,setMode] = useState(true);

    return(
        <div className="home">
            <Search setSearch={setSearch} todo={todo} setTodo={setTodo} filter={filter} setFilter={setFilter}/>
            <Form form={form} setForm={setForm} todo={todo} setTodo={setTodo} mode={mode} setMode={setMode}/>
            <Card search={search} todo={todo} setTodo={setTodo} setForm={setForm} mode={mode} setMode={setMode} filter={filter}/>
        </div>
    )
}

export default Home;