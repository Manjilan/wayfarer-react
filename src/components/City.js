import React, { Component } from 'react';
import './cities.css';
import WayfarerModel from '../model/axiosCall'
import axios from 'axios';


class City extends Component {
  constructor(props){
  super(props);
  this.state={
    id:this.props.city,
    citiesPost:[]
  }
  this.getCity=this.getCity.bind(this);

}
getCity(){
  console.log(this.props.city);
  axios
 .get(`https://shrouded-wildwood-58299.herokuapp.com/cities/${this.props.city}`)
 .then((response) => {
   console.log(response);
   this.setState({
     id:this.props.city,
     citiesPost: response.data.post})
 })
 .catch(err => console.log(err))
}

  render() {
    this.props.city != this.state.id ? this.getCity() : null
    let postList = this.state.citiesPost.map((post, index)=>{
      return(
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.user}</p>
        </div>
      )
    })
    console.log(this.state.citiesPost)
    return (
      <div>
      {postList}
      </div>
    )
  }
}

export default City
