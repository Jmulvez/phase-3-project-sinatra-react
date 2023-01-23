import React, { useState } from "react";

function NewDirector({ onAddItem }) {
    const [name, setName] = useState("");
    
    function handleNewName(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const directorData = {
            name: name
        };

        fetch(`http://localhost:9292/directors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(directorData)
        })
        .then(res => res.json())
        .then(newDirector => onAddItem(newDirector))
        setName("")
    }

    return (
        <form className="NewMovie" onSubmit={handleSubmit}>
            Add Director:
            <ul>
                <input 
                    label="name"
                    placeholder="Name"
                    onChange={handleNewName}
                    value={name}
                />
            </ul>
            <button>Submit</button>
        </form>
    )
}

export default NewDirector;
