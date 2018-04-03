import React, { Component } from 'react';
import './cities.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import axios from 'axios'
import City from './City'


class Cities extends Component {
  constructor(props){
  super(props);
  this.state={
    cities:[]
    // currentIndex: 0
  }
    // this.cityClick = this.cityClick.bind(this)
}
componentDidMount () {
 axios
   .get("https://shrouded-wildwood-58299.herokuapp.com/all")
   .then((response) => {
     console.log(response.data.cities)
     this.setState({cities: response.data.cities})
   })
   .catch(err => console.log(err))
}

  render(){
    let cityList= this.state.cities.map((city, index) => {
      return(
          <div key={city._id} className="cities" onClick={(e) => console.log(city._id)} >
            <h3>{city.name}</h3>
            <img src={city.image} alt="city"/>
          </div>
      )}
    )
    return (
      <div>
      {cityList}
      </div>
    )
  }
}

export default Cities
