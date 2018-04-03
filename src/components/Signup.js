import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state={
      fullName:"",
      password:"",
      email:""
    }
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }
  onSignupSubmit(event){
    event.preventDefault();
    let formdata = {fullName: this.state.fullName, email: this.state.email, password: this.state.password };
    console.log(formdata);
    this.registerUser(formdata);
  }
registerUser(formdata){
  console.log("axios works")
    axios
   .post("https://shrouded-wildwood-58299.herokuapp.com/signup", formdata)
   .then((response) => {
     console.log(response);
   })
   .catch(err => console.log(err))
}

  render() {
    return (
      <div className="UserForm">
        <div className="modalForm">
          <form className="Signup" onSubmit={this.onSignupSubmit}>
            <h2>Signup</h2>
            <input type="text" placeholder="Full Name" name="fullName" onChange={(event) => this.setState({fullName: event.target.value})}/><br/>
            <input type="text" placeholder="Email" name="email" onChange={(event) => this.setState({email: event.target.value})}/><br/>
            <input type="password" placeholder="Password" name="password" onChange={(event) => this.setState({password: event.target.value})}/><br/>
            <input type="submit" placeholder="signup"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
