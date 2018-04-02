import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';

class CreatePost extends Component {
  constructor() {
    super();
    this.state={
      city:"",
      cityOptions:[],
      title:"",
      body:""
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    let formdata = {city: this.state.city, title: this.state.title, body: this.state.body };
    console.log(formdata);
    this.createapost(formdata);
  }
  createapost(formdata){
    console.log("axios works")
      axios
     .post("http://localhost:3001/cities/5abe88ea0ab9900a385e6f67", formdata)
     .then((response) => {
       console.log(response);
     })
     .catch(err => console.log(err))
  }
  componentDidMount(){
    axios
   .get("http://localhost:3001/cities")
   .then((response) => {
     console.log(response);
     this.setState({cityOptions: response.data.city})
   })
   .catch(err => console.log(err))
  }
  render() {
    let cityList = this.state.cityOptions.map((city, index)=>{
      return(
        <option key={index}>{city.name}</option>
      )
    })
    console.log(this.state.cities)
    return (
      <div className="postForm">
        <div className="modalForm">
          <form className="createPost" onClick={this.onSubmit}>
            <h2>Create a New Post</h2>
            <select onChange={event => this.setState({city: event.target.value})}>
              {cityList}
            </select>
            <br/>
            <input type="text" placeholder="Title" name="title" onChange={event => this.setState({title: event.target.value})}/><br/>
            <textarea placeholder="Body" name="body" onChange={event => this.setState({body: event.target.value})}/>
            <input type="submit" placeholder="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;
