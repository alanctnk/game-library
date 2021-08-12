import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Main from './components/pages/Main';
import GameDetails from './components/templates/games/GameDetails';
import About from './components/pages/About';

function App() {

  return (
      <Switch>
        <Route exact path="/games" component={Main}  />
        <Route exact path="/games/:id" component={GameDetails}  />
        <Route exact path="/about" component={About}  />
        <Redirect from="*" to="/games" />
      </Switch>    
  );
}

export default App;
