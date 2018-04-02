import React, { Component } from 'react';
import '../App.css';
import WayfarerModel from '../model/axiosCall'
import Post from './Post'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'


class City extends Component {
  constructor(){
  super();
  this.state={
    cities:[]
  }
}

  render() {
    return (
      <div>
      <div>
      <Link to="/post">Post title test</Link>
      </div>
      <div>
      <Switch>
            <Route path="/post" component={ Post } />
         </Switch>
      </div>
      </div>
    )
  }
}

export default City
