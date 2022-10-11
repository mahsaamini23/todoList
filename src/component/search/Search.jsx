import React from "react";
import searchIcon from "../../assets/svg/search_icon.svg";
import "./search.style.css";

const Search = () => {
    return(
        <div className="container_search">
            <div className="box_icon"> 
                <img src={searchIcon} style={{width:"25px" , height:"25px"}}/>
            </div>
            <div>
                <input type="search" className="search_input"/>
            </div>
        </div>
    )
}

export default Search;