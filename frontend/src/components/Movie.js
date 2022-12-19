import React from 'react';
import MovieCard from './MovieCard'

function Movie({ movies, onMovieDelete, onMovieEdit }) {
    const getMovies = movies.map((movie) => {
        return <div>
                    <MovieCard id={movie.id}
                               name={movie.name}
                               runtime={movie.runtime}
                               directorName={movie.directorName}
                               genreName={movie.genreName}
                               imageUrl={movie.imageUrl}
                               onMovieDelete={onMovieDelete}
                               onMovieEdit={onMovieEdit}
                    />
                </div>
    })
    return (
        <div>
            Watchlist
            {getMovies}
        </div>
    )
}

export default Movie;