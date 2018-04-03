import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Routes from './config/routes';

// import Home from './components/Home'
// import Signup from './components/Signup'
// import CitiesContainer from './components/citiesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
