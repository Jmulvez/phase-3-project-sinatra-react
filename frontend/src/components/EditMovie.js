import React, { useState } from "react";

function EditMovie({ id, name, runtime, genre, imageUrl, onMovieEdit }) {
    const [movieName, setMovieName] = useState(name);
    const [movieRuntime, setMovieRuntime] = useState(runtime);
    const [movieGenre, setMovieGenre] = useState(genre);
    const [movieImage, setMovieImage] = useState(imageUrl);

    function handleEditSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/movies/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: movieName,
                runtime: movieRuntime,
                genre: movieGenre,
                imageUrl: movieImage
              }),
        })
        .then((res) => res.json())
        .then((updatedMovie) => onMovieEdit(updatedMovie));
    }
    return (
        <form onSubmit={handleEditSubmit}>
            <input 
            type="text"
            name="name"
            autoComplete="off"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            />
            <input
            type="text"
            name="runtime"
            autoComplete="off"
            value={movieRuntime}
            onChange={(e) => setMovieRuntime(e.target.value)}
            />
            <input
            type="text"
            name="genre"
            autoComplete="off"
            value={movieGenre}
            onChange={(e) => setMovieGenre(e.target.value)} 
            />
            <input
            type="text"
            name="image"
            autoComplete="off"
            value={movieImage}
            onChange={(e) => setMovieImage(e.target.value)} 
            />
            <button>
            <input 
            type="submit" 
            value="Submit" 
            />
            </button>
        </form>
    );
}

export default EditMovie;