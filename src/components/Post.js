import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'

class Post extends Component {
  constructor(){
  super();
  this.state={
    post: {}
  }
}

componentDidMount () {
 axios
   .get("http://localhost:4000/cities/5ac265f8740dab1b5d4c95c6/5ac265f8740dab1b5d4c95ce")
   .then((response) => {
     console.log(response.data.post)
     this.setState({post: response.data.post})
     console.log(this.state);
   })
   .catch(err => console.log(err))
}
render() {
    return(
        <div className="posts">
          {this.state.post.title}
          {this.state.post.body}
        </div>
    )}
}

export default Post