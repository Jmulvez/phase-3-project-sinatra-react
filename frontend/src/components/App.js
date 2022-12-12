import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Movie from "./Movie";
import NewMovie from "./NewMovie";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then((res) => res.json())
    .then(data => setMovies(data))
}, []);

//function handleNewMovie(newMovie) {
  //setMovies([...movies, newMovie])
//}
    return (
      <div>
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Movies">Watchlist</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Movies">

            <Movie movies={movies}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    );
  }
  
  export default App;