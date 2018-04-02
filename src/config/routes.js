import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Cities from '../components/Cities';
import City from '../components/City';
// import TodosContainer from '../containers/TodosContainer';

class Routes extends Component {
  render() {
    return (
      <div className='mainRoute'>
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/cities' component={Cities} />
  </Switch>
  </div>
)
}
}
export default Routes
