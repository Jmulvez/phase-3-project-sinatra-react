import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function EditMovie({ id, name, runtime, directorName, genreName, imageUrl, onMovieEdit }) {
    let history = useHistory();
    const [movieName, setMovieName] = useState(name);
    const [movieRuntime, setMovieRuntime] = useState(runtime);
    const [movieDirector, setMovieDirector] = useState(directorName);
    const [movieGenre, setMovieGenre] = useState(genreName);
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
                directorName: movieDirector,
                genreName: movieGenre,
                imageUrl: movieImage, 
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
            name="director"
            autoComplete="off"
            value={movieDirector}
            onChange={(e) => setMovieDirector(e.target.value)} 
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
            <input 
            type="submit" 
            value="Submit" 
            onClick={() => {history.push('/movies')}}/>
        </form>
    )
}

export default EditMovie;