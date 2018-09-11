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

componentDidMount = () => {
  // this.getFromLocalStorage()
  let storedLocation = JSON.parse(localStorage.getItem('weathrly', this.state.location))
  let autoLocation = 'autoip'
  if(this.state.location === '') {
    this.fetchApi(this.state.location = storedLocation)
  } else {
    this.fetchApi(this.state.location = autoLocation)
    console.log(storedLocation)
  }
}

componentWillMount(){
  let storedLocation = JSON.parse(localStorage.getItem('weathrly', this.state.location))
    if(localStorage.getItem('weathrly', this.state.location)){
    this.fetchApi('weathrly', this.state.location)
  }
  console.log('weathrly', this.state.location)
}

updateLocalStorage = () => {
    localStorage.setItem('weathrly', JSON.stringify(this.state.location))
  }

  getFromLocalStorage = () => {
    const currentLocation = localStorage.getItem(this.state.location)

    if (currentLocation) {
      this.setState({ currentLocation: JSON.parse(currentLocation) })
    }
    console.log(currentLocation)
  }

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
    this.updateLocalStorage()
  }


  render() {
    // componentDidMount();
    let {isLoaded, weatherInfo} = this.state
      if(!isLoaded){
        return <div> Loading.... </div>
      } else { 
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
