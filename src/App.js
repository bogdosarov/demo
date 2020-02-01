import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Home } from "screens/home/home";
import { Clock } from "screens/clock/clock";
import { Smog } from "screens/smog/smog";
import { Compass } from "screens/compass/compass";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/clock">
            <Clock />
          </Route>
          <Route exact path="/smog">
            <Smog />
          </Route>
          <Route exact path="/compass">
            <Compass />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
  );
}

export default App;
