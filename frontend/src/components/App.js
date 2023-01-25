import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import NewMovie from "./NewMovie";
import Directors from "./Directors";
import NewDirector from "./NewDirector";
import DirectorPage from "./DirectorPage";

function App() {
  const [movies, setMovies] = useState([]);
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
    fetch("http://localhost:9292/movies")
    .then((res) => res.json())
    .then(data => setMovies(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/directors")
    .then((res) => res.json())
    .then(data => setDirectors(data))
  }, []);

function handleNewMovie(newMovie) {
  setMovies([...movies, newMovie])
}

function handleNewDirector(newDirector) {
  setDirectors([...directors, newDirector].order)
}

function handleDeleteMovie(id) {
  const updatedMovies = movies.filter((movie) => movie.id !== id);
  setMovies(updatedMovies);
}

function handleDeleteDirector(id) {
  const updatedDirectors = directors.filter((director) => director.id !== id);
  setDirectors(updatedDirectors);
}

function handleEditedMovies(updatedMovieObj) {
  const updatedMovies = movies.map((movie) => {
    if (movie.id === updatedMovieObj.id) {
      return updatedMovieObj;
    } else {
      return movie;
    }
  });
  setMovies(updatedMovies);
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
            <NewDirector onAddItem={handleNewDirector} />
            <Directors 
              directors={directors} 
              onDirectorDelete={handleDeleteDirector}
              />
          </Route>
          <Route exact path="/directors/:id">
            <NewMovie onAddItem={handleNewMovie} />
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