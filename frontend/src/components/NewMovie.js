import React, { useState } from "react";

function NewMovie({ onAddItem }) {
    const [name, setName] = useState("");
    const [runtime, setRuntime] = useState("");
    const [directorName, setDirectorName] = useState("");
    const [genreName, setGenreName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    function handleNewName(e) {
        setName(e.target.value);
    }

    function handleNewRuntime(e) {
        setRuntime(e.target.value);
    }

    function handleNewDirector(e) {
        setDirectorName(e.target.value);
    }

    function handleNewGenre(e) {
        setGenreName(e.target.value);
    }

    function handleNewImage(e) {
        setImageUrl(e.target.value);
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
            
        </form>
    )
}

export default NewMovie;