import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import {
  Switch,
  Route,
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() =>
            <Home />
          }/>
          <Route exact path='/about' render={() =>
            <About />
          }/>
          <Route exact path='/portfolio' render={() =>
            <Portfolio />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
