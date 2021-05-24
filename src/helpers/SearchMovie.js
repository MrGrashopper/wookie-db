import { useState, useEffect } from "react";
import axios from "axios";

const SearchMovie = (search) => {
    // when seraching a movie fetch API for response
    const [movies, setMovies] = useState();
    const config = {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_WOOKIE_KEY}` }
    };

    useEffect(() => {    
        const searchMovie = async () => { 
            const query = `?q=${search}`;
            const response = await axios.get(process.env.REACT_APP_BASE_URL + query, config)
            
            if (response.status == 200 && response.data.movies?.length > 0) {
                setMovies(response.data.movies)              
            }            
        }
        searchMovie();
    }, [search])
    
    
    return { movies }
}

export default SearchMovie;