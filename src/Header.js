import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header>
      <nav>
        <a href="/">Wayferer</a>
        <a href="">Sign Up</a>
        <a href="">Log In</a>
        <a href="">Log Out</a>
      </nav>
      <h1>Wayfarer</h1>

      </header>
    );
  }
}

export default Header;
