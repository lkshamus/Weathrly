import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
// import { data } from './API.js';
import SevenHourCard from './SevenHourCard.js';
import CurrentWeatherCard from './CurrentWeatherCard';
import TenDayCard from './TenDayCard';
import apiConfig from './APIkey.js'

// const weatherInfo = `http://api.wunderground.com/api/${apiConfig.apiKey}/conditions/hourly/forecast10day/q/${state}/${city}.json`

class App extends Component {
  constructor(props) {
    super(props)
    
  this.state = {
    weatherCards: [],
    isLoaded: false,
    location: 'autoip'
  }  
}

componentDidMount(){
  if(this.state.value === null){
    this.fetchApi('autoip')
  } else {
    this.fetchApi(this.state.location)
  }
}

//If no location is provided then we use auto ip address location else use location typed in

fetchApi(location) {
  fetch(`http://api.wunderground.com/api/${apiConfig.apiKey}/conditions/hourly/forecast10day/q/${this.state.location}.json`)
    .then(data => data.json())
    // console.log(data.json())
    .then(data => {this.setState({
     isLoaded: true,
     weatherCards: data,
     location: location
    })})
    .catch(error => {
      console.log(error)
    })
}

  getLocation = (location) => {
    this.setState({
      location: location
    })
    this.fetchApi(location)
  }


  render() {
    let {isLoaded, weatherInfo} = this.state
      if(!isLoaded){
        return <div> Loading.... </div>
      } else { 
        console.log("RENDER: ", typeof(this.state.weatherCards))
      return (
        <div className="App">
        <Header getLocation={this.getLocation}/>
        <CurrentWeatherCard 
        weather={this.state.weatherCards} />
       <SevenHourCard 
       weather={this.state.weatherCards}
       selectedCardCount = {this.state.senlectedCardCount}/>
       <TenDayCard 
        weather={this.state.weatherCards} />
      </div>
      )
    }
  }
}


export default App;
