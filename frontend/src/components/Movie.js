import React from 'react';
import MovieCard from './MovieCard'

function Movie({ movies }) {
    const getMovies = movies.map((movie) => {
        return <div>
                    <MovieCard name={movie.name}
                               runtime={movie.runtime}
                               directorName={movie.directorName}
                               genreName={movie.genreName}
                               imageUrl={movie.imageUrl}
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