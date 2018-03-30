import React, { Component } from 'react';
import './Signup.css';

class CreatePost extends Component {
  render() {
    return (
      <div className="postForm">
        <div className="modalForm">
          <form className="createPost">
            <h2>Create a New Post</h2>
            <select>
              <option></option>
            </select>
            <br/>
            <input type="text" placeholder="Title"/><br/>
            <input type="text" placeholder="body"/>
            <input type="submit" placeholder="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;
