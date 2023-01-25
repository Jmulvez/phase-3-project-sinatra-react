import React from 'react';
import { Link } from "react-router-dom";
import DirectorPage from './DirectorPage';

function Directors({ directors, onMovieDelete, onMovieEdit }) {

    const getDirectors = directors.map((director) => {
        return <div key={director.id}>
                    <h2>{director.name}</h2>
                    <Link to={`/directors/${director.id}`}>Director Page</Link>
               </div>
    })
    return (
        <div>
            <h1>All Directors</h1>
            {getDirectors}
        </div>
    )
}

export default Directors;
