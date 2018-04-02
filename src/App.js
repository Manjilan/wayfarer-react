import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'
import Routes from './config/routes'
import Cities from './components/Cities'
import City from './components/City'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Routes />
      <Login />
      <City />
      </div>
    );
  }
}

export default App;
