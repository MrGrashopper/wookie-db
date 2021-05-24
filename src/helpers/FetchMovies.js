import { useState, useEffect } from "react";
import axios from "axios";

const FetchMovies = () => {
    // fetch movies from API and store in movies state
    const [movies, setMovies] = useState();

    const config = {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_WOOKIE_KEY}` }
    };

    useEffect(() => {    
        const fetchMovies = async () => { 
            const response = await axios.get(process.env.REACT_APP_BASE_URL, config)
            if (response.status == 200) {
                setMovies(response.data.movies)              
            }            
        }
        fetchMovies();
    }, [])
    
    
    return { movies }
}

export default FetchMovies;