import React from "react";
import searchIcon from "../../assets/svg/search_icon.svg";
import "./search.style.css";
import Button from "../button/Button";

const Search = ({setSearch}) => {
    const filterBtn = [{id:1, title:"All"},{id:2, title:"To DO"},{id:3, title:"Not To DO"}]
    
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
                    <Button key={item.id}>
                        {item.title}
                    </Button>
                ))}
            </div>
            
        </div>
    )
}

export default Search;