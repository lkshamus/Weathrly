import React, { Component } from 'react';
import Card from './Card.js'

export default class TenDayCard extends Card {

  constructor() {
    super();
  }

  getTenDay() {
    let tenDayWeather = this.props.weather.forecast.simpleforecast.forecastday
    let tenDayArray = []

    tenDayWeather.map(day => {
      tenDayArray.push(day)
    })
    return tenDayArray
  }

  render() {
    let tenDayData = this.getTenDay()
    let render_tenDay = []
    for(let i=0; i < tenDayData.length; i++) {
      render_tenDay.push((
    <div> 
      <h1>{tenDayData[i].date.weekday}<img src={tenDayData[i].icon_url} alt='weather'/></h1>
      <p>High {tenDayData[i].high.fahrenheit}</p>
      <p>Low {tenDayData[i].low.fahrenheit}</p>
    </div>
    ))
    }
    return render_tenDay
  }

}