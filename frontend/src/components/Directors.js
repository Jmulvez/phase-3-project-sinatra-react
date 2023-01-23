import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DirectorPage from './DirectorPage';

function Directors({ directors, onDirectorDelete, onMovieEdit, onMovieDelete, onAddItem }) {
    const [director, setDirector] = useState([]);

    const getDirectors = directors.map((director) => {
        return <div key={director.id}>
                    <h2>{director.name}</h2>
                    <Link to={`/directors/${director.id}`} 
                    directors={directors}
                    onDirectorDelete={onDirectorDelete}
                    >Director Page</Link>
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
