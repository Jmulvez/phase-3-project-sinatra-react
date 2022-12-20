import React, { useState } from "react";
import EditMovie from "./EditMovie";

function MovieCard({ id, name, runtime, directorName, genreName, imageUrl, onMovieDelete, onMovieEdit }) {
    const [watched, setWatched] = useState(false);
    const [isEditing, setEditing] = useState(false);
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
        <li>
        {isEditing ? (
            <EditMovie 
            id={id}
            name={name}
            runtime={runtime}
            directorName={directorName}
            genreName={genreName}
            imageUrl={imageUrl}
            onMovieEdit={handleUpdateMovie}
            />
        ) : (
            <div>
            <h1>{name}</h1>
            <img src={imageUrl} alt="" style={pictureStyle} />
            <p>Directed by {directorName}</p>
            <p>{genreName}</p>
            <p>Runtime: {runtime} minutes</p>
            <button onClick={() => setWatched((prevState) => !prevState)}>
                {watched ? "✅" : "❎"}
            </button>
            <button onClick={() => setEditing((isEditing) => !isEditing)}>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </button>
            <button onClick={handleDeleteClick}>
                <span role="img" aria-label="delete">
                    🗑
                </span>
          </button>
        </div>
        )}
        </li>
    );
}

export default MovieCard;