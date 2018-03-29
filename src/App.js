import React, { Component } from 'react';
import './App.css';

import Home from './components/Home'
import Header from './components/Header'
import Signup from './components/Signup'
import Routes from './config/routes';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Home />
      <Signup />
      </div>
    );
  }
}

export default App;
