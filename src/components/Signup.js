import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <div className="UserForm">
      <div className="modalForm">
      <form className="Login">
      <h2>Log in</h2>
      <input type="text" placeholder="username"/><br/>
      <input type="password" placeholder="password"/><br/>
      <input type="submit" placeholder="login"/>
      </form>
      <form className="Signup">
      <h2>Signup</h2>
      <input type="text" placeholder="username"/><br/>
      <input type="password" placeholder="password"/><br/>
      <input type="password" placeholder="confirm password"/><br/>
      <input type="submit" placeholder="signup"/>
      </form>
      </div>
      </div>
    );
  }
}

export default Signup;