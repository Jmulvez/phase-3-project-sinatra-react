import React, { useState } from "react";

function NewMovie({ onAddItem }) {
    const [name, setName] = useState("");
    const [runtime, setRuntime] = useState("");
    const [directorName, setDirector] = useState("");
    const [genreName, setGenre] = useState("");
    const [imageUrl, setImage] = useState("");
    
    function handleNewName(e) {
        setName(e.target.value);
    }

    function handleNewRuntime(e) {
        setRuntime(e.target.value);
    }

    function handleNewDirector(e) {
        setDirector(e.target.value);
    }

    function handleNewGenre(e) {
        setGenre(e.target.value);
    }

    function handleNewImage(e) {
        setImage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const movieData = {
            name: name,
            runtime: runtime,
            directorName: directorName,
            genreName: genreName,
            imageUrl: imageUrl
        };

        fetch("http://localhost:9292/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData)
        })
        .then(res => res.json())
        .then(newMovie => onAddItem(newMovie))
    }

    return (
        <form className="NewMovie" onSubmit={handleSubmit}>
            Add Movie to Watchlist:
            <ul>
            <input 
            label="name"
            placeholder="Name"
            onChange={handleNewName}
            value={name}
            />
            <input 
            label="runtime"
            placeholder="Movie Length"
            onChange={handleNewRuntime}
            value={runtime}
            />
            <input
            label="director"
            placeholder="Director"
            onChange={handleNewDirector}
            value={directorName} 
            />
            <input
            label="genre"
            placeholder="Genre"
            onChange={handleNewGenre}
            value={genreName}
            />
            <input
            label="image"
            placeholder="Image URL"
            onChange={handleNewImage}
            value={imageUrl} 
            />
            </ul>
            <button>Submit</button>
        </form>
    )
}

export default NewMovie;