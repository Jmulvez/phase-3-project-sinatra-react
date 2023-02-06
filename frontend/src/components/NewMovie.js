import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NewMovie({ onAddMovie }) {
    const [name, setName] = useState("");
    const [runtime, setRuntime] = useState("");
    const [genre, setGenre] = useState("");
    const [imageUrl, setImage] = useState("");
    const params = useParams();
    
    function handleNewName(e) {
        setName(e.target.value);
    }

    function handleNewRuntime(e) {
        setRuntime(e.target.value);
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
            genre: genre,
            imageUrl: imageUrl,
            director_id: params.id
        };

        fetch(`http://localhost:9292/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData)
        })
        .then(res => res.json())
        .then(newMovie => onAddMovie(newMovie))
        setName("")
        setRuntime("")
        setGenre("")
        setImage("")
    }

    return (
        <form className="NewMovie" onSubmit={handleSubmit}>
            Add Movie:
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
            label="genre"
            placeholder="Genre"
            onChange={handleNewGenre}
            value={genre}
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
