import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import CitiesContainer from '../components/citiesContainer';
import Post from '../components/Post';


class Routes extends Component {
  render() {
    return (
      <div className='mainRoute'>
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/Cities' component={CitiesContainer} />

  </Switch>
  </div>
)
}
}
export default Routes
