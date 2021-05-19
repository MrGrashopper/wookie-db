import React from 'react';
import './Card.scss'; 
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom";

function MovieCard({title, image}) {
    return (
        <div className="card__container">
            <Link to={"/details/" + title}>
                <Card className="card">
                    <img src={image} alt=""/>
                    <div className="card__info">
                        <h3 className="card__title">{ title }</h3>
                    </div>
                </Card>            
            </Link>
        </div>
    )
}

export default MovieCard

