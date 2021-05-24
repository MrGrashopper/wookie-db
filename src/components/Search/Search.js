import React, { useState, useEffect } from 'react';
import './Search.scss'; 
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";

function Search() {
    const [inputValue, setInputValue] = useState(null);
    const history = useHistory();

    // push to movie url when typing in search
    const handleSearch = () => {
        history.push("/search/" + inputValue);
    }

    return (
        <div className="search">
            <FormControl>
                <div className="search__items">
                    <SearchIcon 
                        className="search__icon" 
                        onClick={handleSearch}/>
                    <input 
                        data-testid="input"
                        onChange={  (e) => {setInputValue(e.target.value)} }
                        onKeyUp={handleSearch}
                        type="text"/>                
                </div>
            </FormControl>
        </div>
    )
}

export default Search
