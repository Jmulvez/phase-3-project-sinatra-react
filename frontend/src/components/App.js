import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Movie from "./Movie";
import NewMovie from "./NewMovie";
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

function handleDeleteMovie(id) {
  const updatedMovies = movies.filter((movie) => movie.id !== id);
  setMovies(updatedMovies);
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
                <Link to="/Movies" style={textStyle}>Watchlist</Link>
              </li>
            </button>
            <button>
              <li style={buttonStyle}>
                <Link to="/DirectorPage" style={textStyle}>Directors</Link>
              </li>
            </button>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/DirectorPage">
            <DirectorPage directors={directors}/>
          </Route>
          <Route path="/Movies">
            <NewMovie onAddItem={handleNewMovie} />
            <Movie 
              movies={movies}
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