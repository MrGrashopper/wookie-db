import React from 'react';
import './Details.scss'; 
import { useParams } from "react-router-dom";
import FetchMovie from "../../helpers/FetchMovie";
import StarIcon from '@material-ui/icons/Star';

function Details() {
    const { title } = useParams();
    const data = FetchMovie(title);

    return (
        <div>
            { (!(data.movie == null) && (data.movie != 404)) && 
                <>
                <div className="details">
                    <div className="details__left">
                        <img src={data.movie.poster} alt=""/>
                    </div>
                    <div className="details__right">
                        <h2>
                            <span>{ data.movie.title } </span>
                            <span>( </span>
                            <span className="details__star"><StarIcon/></span>
                            <span className="details__rating"> { data.movie.imdb_rating }</span>
                            <span> )</span>
                        </h2>

                        <div className="details__info">
                            <p>
                                <span>{ new Date(data.movie.released_on).getFullYear() }</span>
                                <span><b> | </b></span>
                                <span> { data.movie.length }</span>
                                <span><b> | </b></span>
                                <span>{Array.isArray(data.movie.director) ? data.movie.director.join(', ') : data.movie.director }</span>
                            </p>
                            <p>cast: { Array.isArray(data.movie.cast) ? data.movie.cast.join(', ') : data.movie.cast }</p>
                        </div>

                        <div className="details__overview">
                            <p>{ data.movie.overview }</p>
                        </div>
                    </div>
                     
                </div>
                </>
            }

            {  data.movie == 404 && 
                <div className="details"><h2>MOVIE NOT FOUND</h2></div>
            }
        </div>
    )
}

export default Details
