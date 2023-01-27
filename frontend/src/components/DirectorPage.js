import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import MovieCard from './MovieCard';

function DirectorPage({ directors, onMovieDelete, onMovieEdit }) {
    const [selectedDirector, setSelectedDirector] = useState({
        name: "",
        movies: []
    });
    const params = useParams();

    const movieCardStyle = {
        backgroundColor: "grey",
        padding: 80,
        borderRadius: '5%',
        textDecoration: 'none',
        listStyle: 'none'
    }

    useEffect(() => {
        const director = directors.find((director) => director.id === parseInt(params.id))
        if (director) {
            setSelectedDirector(director)
        }
    }, [directors]);

    const getMovies = selectedDirector.movies.map((movie) => {
        return <div className="card" style={movieCardStyle}>
                    <MovieCard id={movie.id}
                               name={movie.name}
                               runtime={movie.runtime}
                               genre={movie.genre}
                               imageUrl={movie.imageUrl}
                               onMovieDelete={onMovieDelete}
                               onMovieEdit={onMovieEdit}
                    />
                </div>
    })

    return (
        <div>
            <h1>
                {selectedDirector.name} Movies:
            </h1>
            <ul>
                {getMovies}
            </ul>
        </div>
    )
}

export default DirectorPage;
