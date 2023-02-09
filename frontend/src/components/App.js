import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import NewMovie from "./NewMovie";
import Directors from "./Directors";
import NewDirector from "./NewDirector";
import DirectorPage from "./DirectorPage";

function App() {
  const [directors, setDirectors] = useState([]);

  const buttonStyle = {
    color: "silver",
    textDecoration: 'none',
    listStyle: 'none'
  };

  const textStyle = {
    color: "black",
    textDecoration: 'none'
  };

  useEffect(() => {
    fetch("http://localhost:9292/directors")
    .then((res) => res.json())
    .then(data => setDirectors(data))
  }, []);

function handleNewMovie(newMovie) {
  const director = directors.find((director) => director.id === newMovie.director_id)
  const updatedMovies = [...director.movies, newMovie]
  const updatedDirector = {...director, movies: updatedMovies}
  const updatedDirectors = directors.map((obj) => {
    if (obj.id === director.id) {
      return updatedDirector
    }
    else {
      return obj
    }
  })
  setDirectors(updatedDirectors)
}

function handleNewDirector(newDirector) {
  setDirectors([...directors, newDirector])
}

function handleDeleteMovie(id) {
  const director = directors.find((director) => director.id === id.director_id)
  const updatedMovies = director.movies.filter((movie) => movie.id == id.id);
  const updatedDirector = {...director, movies: updatedMovies}
  const updatedDirectors = directors.map((obj) => {
    if (obj.id === director.id) {
      return updatedDirector
    }
    else {
      return obj
    }
  })
  setDirectors(updatedDirectors);
}

function handleEditedMovies(updatedMovie) {
  const director = directors.find((director) => director.id === updatedMovie.director_id)
  const updatedMovies = director.movies.map((movie) => {
    if (movie.id === updatedMovie.id) {
      return updatedMovie;
    } else {
      return movie;
    }
  });
  const updatedDirector = {...director, movies: updatedMovies}
  const updatedDirectors = directors.map((obj) => {
    if (obj.id === director.id) {
      return updatedDirector
    }
    else {
      return obj
    }
  })
  setDirectors(updatedDirectors);
}

    return (
      <div>
        <Router>
      <div>
        <nav>
          <ul>
            <button>
              <li style={buttonStyle}>
                <Link to="/" style={textStyle}>Login</Link>
              </li>
            </button>
            <button>
              <li style={buttonStyle}>
                <Link to="/directors" style={textStyle}>Directors</Link>
              </li>
            </button>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/directors">
            <NewDirector onAddDirector={handleNewDirector} />
            <Directors 
              directors={directors} 
              />
          </Route>
          <Route exact path="/directors/:id">
            <NewMovie 
              onAddMovie={handleNewMovie} 
            />
            <DirectorPage 
              directors={directors}
              onMovieDelete={handleDeleteMovie}
              onMovieEdit={handleEditedMovies}
              />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    );
  }
  
  export default App;