import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import CitiesContainer from '../components/citiesContainer';
import Profile from '../components/Profile'


class Routes extends Component {
  render() {
    return (
      <div className='mainRoute'>
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/Cities' component={CitiesContainer} />
    <Route path='/profile' component={Profile} />
    <Route path='/profile/5AC2D42561C79F0004BF193D' component={Profile} />
  </Switch>
  </div>
)
}
}
export default Routes
