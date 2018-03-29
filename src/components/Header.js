import React, { Component } from 'react';
import '../App.css';

class Header extends Component {

  render() {
    return (
      <header>
      <nav>
        <a href="/"><img src="./img/logo.png" className="brand-logo"/></a>
        <div>
          <a href="">Sign Up</a>
          <a href="">Log In</a>
          <a href="">Log Out</a>
        </div>
      </nav>
      <h1>Wayfarer</h1>

      </header>
    );
  }
}

export default Header;
