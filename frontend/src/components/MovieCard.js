import React, { useState } from "react";

function MovieCard({ name, runtime, directorName, genreName, imageUrl }) {
    const [watched, setWatched] = useState(false);
    const pictureStyle = {
        width:"200px",
        height:"250px"
    };
    return (
        <div>
            <h1>{name}</h1>
            <img src={imageUrl} alt="" style={pictureStyle} />
            <p>{directorName}</p>
            <p>{genreName}</p>
            <p>Runtime: {runtime} minutes</p>
            <button onClick={() => setWatched((prevState) => !prevState)}>
                {watched ? "✅" : "❎"}
            </button>
        </div>
    )
}

export default MovieCard;