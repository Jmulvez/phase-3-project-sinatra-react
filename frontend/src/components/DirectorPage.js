import React from 'react';

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
