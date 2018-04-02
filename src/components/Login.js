import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="LoginForm">
      <div className="modalForm">
      <form className="Login">
      <h2>Log in</h2>
      <input type="text" placeholder="username"/><br/>
      <input type="password" placeholder="password"/><br/>
      <input type="submit" placeholder="login"/>
      </form>
      </div>
      </div>
    );
  }
}

export default Login;