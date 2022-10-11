import React,{useState} from "react";
import Card from "../../component/card/Card";
import Search from "../../component/search/Search";
import Form from "../../component/form/Form";

const Home = ()=>{
    const [search,setSearch] = useState("");
    const [form,setForm] = useState({id:"", title:"" ,description:"", status:"not to do"})

    return(
        <div className="home">
            <Search setSearch={setSearch}/>
            <Form/>
            <Card search={search}/>
        </div>
    )
}

export default Home;