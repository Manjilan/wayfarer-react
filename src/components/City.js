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
//   constructor(props){
//   super(props);
//   this.state={
//     selectedCity: this.props.cities._id
//   }
// }


  render() {
    return (
      <div>
<<<<<<< HEAD
      <div>
      <Link to="/cities/post">Post title test</Link>
      </div>
      <div>
      <Switch>
            <Route path="/cities/post" component={ Post } />
         </Switch>
      </div>
=======
      
>>>>>>> 708e8e3731cddc3aefb09de45f3575250c9afb27
      </div>
    )
  }
}

export default City
