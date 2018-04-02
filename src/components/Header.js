import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    modalShow = (e) => {
    let modal = document.querySelector('.UserForm');
    modal.style.display = 'flex';
    e.preventDefault();
}

  render() {

    return (
      <header>
      <nav>
        <a href="/"><img src="./img/logo.png" alt ="logo" className="brand-logo"/></a>
        <div>
          <a onClick={this.modalShow} href="">Sign Up</a>
          <a onClick={this.modalShow} href="">Log In</a>
          <a href="#">Log Out</a>
        </div>
      </nav>
      <h1>Wayfarer</h1>

      </header>
    );
  }
}

export default Header;
