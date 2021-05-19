import { useState, useEffect } from "react";
import axios from "axios";

const FetchMovie = (param) => {
    const [movie, setMovie] = useState(null);
    const query = `?q=${param}`

    const config = {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_WOOKIE_KEY}` }
    };

    useEffect(() => {    
        const fetchMovie = async() => { 
            const response = await axios.get(process.env.REACT_APP_BASE_URL + query, config)
            console.log(response)
            if (response.status == 200) {
                response.data.movies.reduce((acc, current) => {
                    if (current.title === param) {
                        setMovie(current)
                    }
                }, 0)                
            }            
        }
        fetchMovie();
        console.log(movie)
    }, [])

    
    return { movie }
}

export default FetchMovie;