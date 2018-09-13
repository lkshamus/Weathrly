import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import CurrentWeatherCard from './CurrentWeatherCard';
import {data} from './API';

describe('CurrentWeatherCard', () => {
  
  let wrapper;
  let weatherCards = data;

  beforeEach(()=> {
    wrapper = shallow(<CurrentWeatherCard weather={data}/>)
  })

  it('should exist', () => {
  expect(wrapper).toBeDefined();
  })

  it('should get data for the current city', () => {
    wrapper.instance().getSimpleForecast()
    expect(weatherCards.current_observation.display_location.full).toEqual('Louisville, KY')
  })

  it('should get the current condition for the current city', () => {
    wrapper.instance().getSimpleForecast()
    expect(weatherCards.hourly_forecast[0].condition).toEqual('Partly Cloudy')
  })

  it('should get the high temperature for the current city', () => {
    wrapper.instance().getSimpleForecast()
    expect(weatherCards.forecast.simpleforecast.forecastday[0].low.fahrenheit).toEqual('32')
  })

  it('should get the high temperature for the current city', () => {
    wrapper.instance().getSimpleForecast()
    expect(weatherCards.forecast.simpleforecast.forecastday[0].high.fahrenheit).toEqual('51')
  })

  it('should get the current temperature for the current city', () => {
    wrapper.instance().getSimpleForecast()
    expect(weatherCards.hourly_forecast[0].temp.english).toEqual('47')
  })

    it('should get the current discription for the current city', () => {
    wrapper.instance().getSimpleForecast()
    expect(weatherCards.forecast.txt_forecast.forecastday[0].fcttext).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.')
  })
})