import React, { Component } from 'react';
import '../App.css';

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
        <a href="/"><img src="./img/logo.png" className="brand-logo"/></a>
        <div>
          <a onClick={this.modalShowSign} href="">Sign Up</a>
          <a onClick={this.modalShowLog} href="">Log In</a>
          <a href="">Log Out</a>
        </div>
      </nav>
      <h1>Wayfarer</h1>

      </header>
    );
  }
}

export default Header;
