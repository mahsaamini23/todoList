import React from "react";
import searchIcon from "../../assets/svg/search_icon.svg";
import "./search.style.css";
import Button from "../button/Button";

const Search = ({setSearch}) => {
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
            
        </div>
    )
}

export default Search;