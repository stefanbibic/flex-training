import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import FlexContainer from './components/FlexContainer';
import FlexChildren from './components/FlexChildren';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/flexContainer">
            <FlexContainer />
          </Route>

          <Route path="/flexChildren">
            <FlexChildren />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
