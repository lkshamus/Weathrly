import React, { Component } from 'react';
import App from './App'

export default class Card extends Component {

  constructor() {
    super()
}

  getCurrentHour() {
    let dateObj = new Date()
    return dateObj.getHours()
  }

  getCurrentDay() {
    let dayObj = new Date()
    return dayObj.getDate()
  }

  getAPIData() {

   let currentHour = this.getCurrentHour()
   let currentDay = this.getCurrentDay()
   let weatherData = this.props.weather.hourly_forecast
   let hourlyData = []
   console.log("weatherData: ", weatherData)
   console.log("weatherData: ", weatherData.hourly_forecast)
   Object.values(weatherData).map(data => {
  
  
    if ( (data.FCTTIME.hour >= currentHour) && data.FCTTIME.mday == currentDay ){
      hourlyData.push(data)
    }
   })
   return hourlyData
  }
}