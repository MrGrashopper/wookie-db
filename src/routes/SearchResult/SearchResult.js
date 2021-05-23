import React from 'react';
import './SearchResult.scss'; 
import { useParams } from "react-router-dom";
import SearchMovie from "../../helpers/SearchMovie";
import MovieCard from "../../components/Card/MovieCard";

function SearchResult() {
    const { search } = useParams();
    const data = SearchMovie(search);

    return (
        <div className="searchResult">
            { data.movies && 
                <div className="search__container">
                    { data.movies?.map((movie, index) => {
                        if (movie) {
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
            }            
        </div>
    )
}

export default SearchResult
