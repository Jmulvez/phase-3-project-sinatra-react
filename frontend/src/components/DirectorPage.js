import React from 'react';
import DirectorCard from './DirectorCard';

function DirectorsPage({ directors }) {

    const getDirectors = directors.map((director) => {
        return <div>
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
