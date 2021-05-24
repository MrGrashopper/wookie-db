import React from 'react';
import './Home.scss'; 
import FetchMovies from "../../helpers/FetchMovies";
import MovieCard from "../../components/Card/MovieCard";

function Home() {
    const data = FetchMovies();
    const genres = [];

    // sort data by genre and display all avaiable movies
    data.movies?.reduce((acc, current) => {
        current.genres.reduce((acc, currentGenre) => {
            if (!genres.includes(currentGenre)) {
                genres.push(currentGenre)
            }
        })
        genres.sort();
    });
    

    return (
        
        <div className="genre">
           { genres && genres.map((genre, index) => {

            return (
                <React.Fragment key={genre}>  
                    <h2>{ genre }</h2>
                    <div className="genre__container">
                    { data.movies?.map((movie, index) => {
                        if ((movie.genres).includes(genre)) {
                            return (
                                <MovieCard 
                                    id={movie.id}
                                    key={"genre" + movie.id}
                                    index={index}
                                    title={movie.title}
                                    image={movie.poster}
                                    rating={movie.imdb_rating}/>                                                                                             

                            )
                        }
                     })                        
                    }                    
                    </div>
                </React.Fragment>  
            )          
           })}        
        </div>
    )
}

export default Home
