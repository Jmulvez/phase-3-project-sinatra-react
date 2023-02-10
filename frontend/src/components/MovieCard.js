import React, { useState } from "react";
import EditMovie from "./EditMovie";

function MovieCard({ id, name, runtime, genre, imageUrl, onMovieDelete, onMovieEdit }) {
    const [isEditing, setEditing] = useState(false);

    const pictureStyle = {
        width:"300px",
        height:"400px"
    };

    let deletedMovie = {id, name}

    function handleDeleteClick(e) {
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
              }
        })
        .then((res) => res.json())
        .then(() => onMovieDelete(deletedMovie))
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
            genre={genre}
            imageUrl={imageUrl}
            onMovieEdit={handleUpdateMovie}
            />
        ) : (
            <div>
            <h1>{name}</h1>
            <img src={imageUrl} alt="" style={pictureStyle} />
            <p>{genre}</p>
            <p>Runtime: {runtime} minutes</p>
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