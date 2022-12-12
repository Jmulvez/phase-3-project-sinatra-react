import React from 'react';
import MovieCard from './MovieCard'

function Movie({ movies }) {
    const getMovies = movies.map((movie) => {
        return <div>
                    <MovieCard name={movie.name}
                               runtime={movie.runtime}
                               director_name={movie.director_name}
                               genre_name={movie.genre_name}
                               image_url={movie.image_url}
                    />
                </div>
    })
    return (
        <div>
            Watchlist
        </div>
        {getMovies}
    );
}

export default Movie;