
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'

class Profile extends Component {

  constructor(props){
  super(props);
  this.state = {
    users:{}
  }

}

componentDidMount () {
 axios
   .get("https://shrouded-wildwood-58299.herokuapp.com/profile/5ac2d42561c79f0004bf193d")
   .then((response) => {
     console.log(response.data)
     this.setState({users: response.data})
     console.log(this.state.users.name);
   })
   .catch(err => console.log(err))
   console.log(this.state );
}

render() {
  return (
    <div>
    <h2>Profile</h2>
    <h4>Name: {this.state.users.name}</h4>
    <h4>Email: {this.state.users.email}</h4>
    <h4>City: {this.state.users.city}</h4>
    <h4>Posts: {this.state.users.posts}</h4>
    </div>
  );
 }
}

export default Profile
