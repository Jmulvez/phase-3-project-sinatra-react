import React, { useState } from "react";

function MovieCard({ id, name, runtime, directorName, genreName, imageUrl, onMovieDelete, onMovieEdit }) {
    const [watched, setWatched] = useState(false);
    const [editing, setEditing] = useState(false);
    const pictureStyle = {
        width:"200px",
        height:"250px"
    };

    function handleDeleteClick() {
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "DELETE",
        });
        onMovieDelete(id);
    }

    function handleUpdateMovie(updatedMovie) {
        setEditing(false);
        onMovieEdit(updatedMovie);
    }
    
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
            <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>
        </div>
    )
}

export default MovieCard;