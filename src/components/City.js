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
}
  render() {
    let postList = this.state.citiesPost.map((post, index)=>{
      return(
        <div key={index} className="postCard" onClick={this.props.getCity}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.user}</p>
          <button onClick={this.deletePost}>Delete</button>
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
