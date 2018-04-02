import React, { Component } from 'react';
import './cities.css';
import axios from 'axios'
import City from './City'

class Cities extends Component {
  constructor(){
  super();
  this.state={
    cities:[]
  }
}
componentDidMount () {
 axios
   .get("http://localhost:3001/all")
   .then((response) => {
     console.log(response.data.cities)
     this.setState({cities: response.data.cities})
   })
   .catch(err => console.log(err))
}

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
