import { useState, useEffect } from "react";
import axios from "axios";

const FetchMovie = (param) => {
    const [movie, setMovie] = useState(null);

    const config = {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_WOOKIE_KEY}` }
    };

    useEffect(() => {   
        if (param != null) {
            const FetchURL = async() => { 
                const query = `?q=${param}`;
                const response = await axios.get(process.env.REACT_APP_BASE_URL + query, config)
    
                if (response.status == 200 && response.data.movies?.length > 0) {
                    response.data.movies.reduce((acc, current) => {
                        if (current.title === param) {
                            setMovie(current)
                        }
                    }, 0)                
                } else {
                    setMovie(404)
                }           
            }
            FetchURL();            
        } 
    }, [param])
    return { movie }
}

export default FetchMovie;