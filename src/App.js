import React from 'react';
// import logo from './logo.svg';
import './App.css';
// reach router
import { Router } from '@reach/router';
// Home
import Home from './components/Home';
// Color
import Color from './components/Color';
// Thing
import Thing from './components/Thing';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Color path="/:hello/:color/:background"/>
        <Thing path="/:thing"/>
      </Router>
    </div>
  );
}

export default App;
