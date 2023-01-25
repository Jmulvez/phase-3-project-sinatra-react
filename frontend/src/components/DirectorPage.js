import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import MovieCard from './MovieCard';

function DirectorPage({ directors, onMovieDelete, onMovieEdit }) {
    const [movies, setMovies] = useState([]);
    const params = useParams();

    console.log(directors[params.id])
    return (
        <div>
            <h1>
                {directors[params.id].name}
            </h1>
        </div>
    )
}

export default DirectorPage;
