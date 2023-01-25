import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function DirectorPage({ directors }) {
    const [movies, setMovies] = useState([]);
    const params = useParams();
    const id = params.id
    const director = directors.find(({ id }) => id === params.id)
    console.log(director)
    return (
        <div>

        </div>
    )
}

export default DirectorPage;