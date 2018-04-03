import React, { Component } from 'react';
<<<<<<< HEAD
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import '../App.css';
=======
import './cities.css';
>>>>>>> f71f833ee9e17c3feddf514cb4187a1c48e41970
import axios from 'axios'
import City from './City'

class Cities extends Component {
  constructor(){
  super();
  this.state={
    cities:[]
    // currentIndex: 0
  }
    // this.cityClick = this.cityClick.bind(this)
}
componentDidMount () {
 axios
   .get("http://localhost:4000/all")
   .then((response) => {
     console.log(response.data.cities)
     this.setState({cities: response.data.cities})
   })
   .catch(err => console.log(err))
}

// cityClick () {
// 
// }
  render() {
    let cityList= this.state.cities.map(( city, index) => {
      return(
          <div key={index} className="cities">
            <h3>{city.name}</h3>
            <img src={city.image} alt="city"/>
          </div>
      )}
    )
    return (
      <div>
      {cityList}
      <City cities={this.state.cities}/>
      </div>
    )
  }
}

export default Cities
