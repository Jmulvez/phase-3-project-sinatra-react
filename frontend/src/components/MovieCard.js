import React, { useState } from "react";

function MovieCard({ name, runtime, director_name, genre_name, image_url }) {
    const [watched, setWatched] = useState(false);
    const pictureStyle = {
        width:"200px",
        height:"250px"
    };
    return (
        <div>
            <h1>{name}</h1>
            <img src={image_url} alt="" style={pictureStyle} />
            <p>{director_name}</p>
            <p>{genre_name}</p>
            <p>Runtime: {runtime} minutes</p>
            <button onClick={() => setWatched((prevState) => !prevState)}>
                {watched ? "✅" : "❎"}
            </button>
        </div>
    )
}

export default MovieCard;