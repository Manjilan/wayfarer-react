import React, { Component } from 'react';
import '../App.css';
import Cities from './Cities';
import City from './City';
import CreatePost from './createPost'

class CitiesContainer extends Component {
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
          <Cities />
        </aside>
        <section>
          <h2>City</h2>
          <City />
          <button onClick={this.postmodalShow} >+</button>
        </section>
        <CreatePost />
      </main>
    );
  }
}

export default CitiesContainer;
