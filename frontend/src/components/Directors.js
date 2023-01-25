import React from 'react';
import { Link } from "react-router-dom";

function Directors({ directors }) {

    const getDirectors = directors.map((director) => {
        return <div key={director.id}>
                    <h2>{director.name}</h2>
                    <Link to={`/directors/${director.id}`}>
                        <p>Movies by {director.name}</p>
                    </Link>
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
