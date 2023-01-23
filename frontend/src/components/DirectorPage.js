import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import NewMovie from './NewMovie';

function DirectorsPage({ directors, onMovieEdit, onMovieDelete }) {

    const getDirectors = directors.map((director) => {
        return <div>
                    <h1>{director.name}</h1>
                    <NewMovie />
                    {director.movies.map((movie) => {
                        return <MovieCard 
                               id={movie.id}
                               name={movie.name}
                               runtime={movie.runtime}
                               genre={movie.genre}
                               imageUrl={movie.imageUrl}
                               onMovieDelete={onMovieDelete}
                               onMovieEdit={onMovieEdit}
                        />
                    })}
               </div>
    })
    return (
        <div>
            Directors
            {getDirectors}
        </div>
    )
}

export default DirectorsPage;
