import React from "react";
import { ReactComponent as SearchIcon} from "../../assets/svg/search_icon.svg";
import "./search.style.css";

const Search = () => {
    return(
        <div className="container_search">
            <div className="box_icon"> 
                <SearchIcon/>
            </div>
            <div>
                <input type="search" className="search_input"/>
            </div>
        </div>
    )
}

export default Search;