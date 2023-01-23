import React from "react";
import DirectorsPage from "./DirectorPage";

function DirectorCard({ id, name, movies, directors }) {
    return <div>
            {directors.map((director) => {
                return <div key={director.id}>
                    <h1>{director.name}</h1>
                       </div>
            })}
           </div>
}

export default DirectorCard;