import React from "react";
import Card from "../../component/card/Card";
import Search from "../../component/search/Search";
import Form from "../../component/form/Form";

const Home = ()=>{
    return(
        <div className="home">
            <Search/>
            <Form/>
            <Card/>
        </div>
    )
}

export default Home;