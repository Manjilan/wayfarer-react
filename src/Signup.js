import React, { Component } from 'react';
import './App.css';

class Signup extends Component {
  render() {
    return (
      <div className="UserForm">
      
      <form className="Login">
      <h2>Log in</h2>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      </form>
      <form className="Signup">
      <h2>Signup</h2>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <input type="password" placeholder="confirm password"/>
      </form>
      </div>
    );
  }
}

export default Signup;