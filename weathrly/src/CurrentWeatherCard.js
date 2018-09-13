import React, { Component } from 'react';


export default class CurrentWeatherCard extends Component {

  constructor() {
    super();
  }

  getCurrentHour() {
    let dateObj = new Date();
    return dateObj.getHours();
  }

  getCurrentDay() {
    let dayObj = new Date();
    return dayObj.getDate();
  }

  getAPIData() {

    let currentHour = this.getCurrentHour();
    let currentDay = this.getCurrentDay();
    let weatherData = this.props.weather.hourly_forecast;
    let hourlyData = [];
    Object.values(weatherData).map(data => {
      hourlyData.push(data);
    })
    return hourlyData;
  }

  getSimpleForecast() {
    let currHour = this.getCurrentHour();
    let currDay = this.getCurrentDay();
    let currWeatherData = this.props.weather.forecast.simpleforecast.forecastday;
    let currData = [];

    currWeatherData.map(data => {
      currData.push(data);
    });
    return currData;
  }

  render() {
    let hourlyData = this.getAPIData();
    let render_data = [];
    let currData = this.getSimpleForecast();
    let curr_data = [];
    for(let i=0; i < hourlyData.length; i++){
      render_data.push((
        <div className='current-weather'>
          <h1 className='current-weather-city'>{this.props.weather.current_observation.display_location.city} </h1>
          <p className='current-condition'> {hourlyData[i].condition} 
            <img className='image-logo-current'src={hourlyData[i].icon_url} alt='weather' />
          </p>
          <p className='low'>Low {currData[0].low.fahrenheit}°F </p>
          <h1 className='current-temp'>{hourlyData[i].temp.english}°F</h1>
          <p className='high'>High {currData[0].high.fahrenheit}°F</p>
          <p className='current-info'> {this.props.weather.forecast.txt_forecast.forecastday[0].fcttext} </p>
        </div>
      ));
    }
    return render_data.concat(curr_data).slice(0, 1);
  }
}
