import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components'

import { Home } from "screens/home/home";
import { Clock } from "screens/clock/clock";
import { Smog } from "screens/smog/smog";
import { Compass } from "screens/compass/compass";

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;

  .content-wrapper {
    position: relative;
    background: #cdcd;
    border-radius: 50%;
    height: 100%;
    
    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
  
  .content {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
`

function App() {
  const containerWidth = window.screen.availHeight

  return (
    <CircleContainer>
      <div className="content-wrapper" style={{ width: containerWidth }}>
        <div className="content">
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
        </div>
      </div>
    </CircleContainer>
  );
}

export default App;
