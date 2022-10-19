import React from "react";
import searchIcon from "../../assets/svg/search_icon.svg";
import "./search.style.css";
import Button from "../button/Button";

const Search = ({setSearch, setFilter , filter}) => {
    const filterBtn = [{id:1, title:"All"},{id:2, title:"To do"},{id:3, title:"Not to do"}]
    const handelClick = (title)=>{
        // setFilter(filterBtn.map(B=> B.title===title? title : null));
        setFilter(console.log(title));
    }

    return(
        <div className="search">
            <div className="container_search">
                <div className="box_icon"> 
                    <img src={searchIcon} alt="" style={{width:"25px" , height:"25px"}}/>
                </div>
                <div>
                    <input type="search" className="search_input" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </div>
            <div className="search_filter">
                {filterBtn.map(item => (
                    <Button key={item.id} onClick={()=>handelClick(item.title)}>
                        {item.title}
                    </Button>
                ))}
            </div>
            
        </div>
    )
}

export default Search;