import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";

function App() {
    return (
      <div>
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    );
  }
  
  export default App;