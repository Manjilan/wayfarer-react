import React, { Component } from 'react';
import './cities.css';
import Cities from './Cities';
import City from './City';
import CreatePost from './createPost'

class CitiesContainer extends Component {
constructor(props){
  super(props);
  this.state={
    city:''
  }
  this.city=this.city.bind(this)
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
          <City city={this.state.city}/>
        </section>
        <CreatePost />
      </main>
    );
  }
}

export default CitiesContainer;
