import React, { Component } from 'react';
import './cities.css';
import Cities from './Cities';
import City from './City';
import CreatePost from './createPost'
import axios from 'axios';



class CitiesContainer extends Component {
constructor(props){
  super(props);
  this.state={
    city:''
  }
  this.city=this.city.bind(this)
  this.getCity=this.getCity.bind(this);
}
city(id){
  this.setState({
    city:id
  })
}
  postmodalShow = (e) => {
  let modal = document.querySelector('.postForm');
  modal.style.display = 'flex';
  e.preventDefault();
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

deletePost(){
  axios
 .delete(`https://shrouded-wildwood-58299.herokuapp.com/cities/${this.state.city}/${this.post._id}`)
 .then((response) => {
   console.log(response);
 })
 .catch(err => console.log(err))
}
  render() {
    return (
      <main className="mainPage">
        <aside className="aside">
          <h2>Cities</h2>
          <Cities cityId={this.city}/>
        </aside>
        <section>
          <h2>City</h2>
          <button onClick={this.postmodalShow}>Create a Post</button>
          <City city={this.state.city} deletePost={this.deletePost} getCity={this.getCity}/>
        </section>
        <CreatePost />
      </main>
    );
  }
}

export default CitiesContainer;
