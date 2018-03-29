import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'
import Signup from './components/Signup'
import Routes from './config/routes';
import Cities from './components/Cities';

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
