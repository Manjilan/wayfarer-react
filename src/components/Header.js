import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    
    modalShowSign = (e) => {
    let modal = document.querySelector('.UserForm');
    modal.style.display = 'flex';
    e.preventDefault();
}
    modalShowLog = (e) => {
    let modal = document.querySelector('.LoginForm');
    modal.style.display = 'flex';
    e.preventDefault();
    }

  render() {

    return (
      <header>
      <nav>
        <a href="/"><img src="./img/logo.png" alt ="logo" className="brand-logo"/></a>
        <div>
          <a onClick={this.modalShowSign} href="">Sign Up</a>
          <a onClick={this.modalShowLog} href="">Log In</a>
          <a href="">Log Out</a>
          <a href="/cities">Cities</a>
        </div>
      </nav>
      <h1>Wayfarer</h1>

      </header>
    );
  }
}

export default Header;
