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
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    let formdata = {name: this.state.name, password: this.state.password, confirm: this.state.confirm };
    console.log(formdata);
    this.registerUser(formdata);
  }
registerUser(formdata){
  console.log("axios works")
    axios
   .post("http://localhost:3001/register", formdata)
   .then((response) => {
     console.log(response);
   })
   .catch(err => console.log(err))
}

  render() {
    return (
      <div className="UserForm">
      <div className="modalForm">
<<<<<<< HEAD
      <form className="Signup">
=======
      <form className="Signup" onClick={this.onSubmit}>
>>>>>>> f71f833ee9e17c3feddf514cb4187a1c48e41970
      <h2>Signup</h2>
      <input type="text" placeholder="username" name="name" onChange={event => this.setState({name: event.target.name})}/><br/>
      <input type="password" placeholder="password" name="password" onChange={event => this.setState({password: event.target.password})}/><br/>
      <input type="password" placeholder="confirm password" name="confirm" onChange={event => this.setState({confirm: event.target.confirm})}/><br/>
      <input type="submit" placeholder="signup"/>
      </form>
      </div>
      </div>
    );
  }
}

export default Signup;
