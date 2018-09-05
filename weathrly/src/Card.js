import React, { Component } from 'react';

export default class Card extends Component {

  constructor() {
    super()
}

render() {
    return (
      <ul className='weather-card'>
      <li className='weather-description'>{this.props.weather.current_observation.display_location.city} </li>
      <li className='weather-description'> {this.props.weather.hourly_forecast[0].FCTTIME.civil} </li>
      <li className='weather-description'> {this.props.weather.hourly_forecast[0].condition} 
        <img src={this.props.weather.hourly_forecast[0].icon_url} alt='weather' />
      </li>
      <li className='weather-description'> {this.props.weather.hourly_forecast[0].temp.english}°F </li>
      <li className='weather-description'> {this.props.weather.hourly_forecast[0].wspd.english}mph</li>
      </ul>
    )

  }
}


