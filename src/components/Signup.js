import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state={
      name:"",
      password:"",
      confirm:""
    }
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }
  onSignupSubmit(event){
    event.preventDefault();
    let formdata = {name: this.state.name, password: this.state.password, confirm: this.state.confirm };
    console.log(formdata);
    this.registerUser(formdata);
  }
registerUser(formdata){
  console.log("axios works")
    axios
   .post("https://shrouded-wildwood-58299.herokuapp.com/register", formdata)
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
            <input type="text" placeholder="Username" name="name" onChange={event => this.setState({name: event.target.name})}/><br/>
            <input type="password" placeholder="Password" name="password" onChange={event => this.setState({password: event.target.password})}/><br/>
            <input type="password" placeholder="Confirm Password" name="confirm" onChange={event => this.setState({confirm: event.target.confirm})}/><br/>
            <input type="submit" placeholder="signup"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
