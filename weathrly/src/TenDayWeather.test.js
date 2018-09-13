import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import TenDayCard from './TenDayCard';
import {data} from './API';

describe('TenDayCard', () => {
  
  let wrapper;
  let weatherCards = data;

  beforeEach(()=> {
    wrapper = shallow(<TenDayCard 
        weather={data}/>)
  })
  it('should display current day of week', () => {
    wrapper.instance().getAPIData()
    expect(weatherCards.forecast.simpleforecast.forecastday[0].date.weekday).toEqual('Wednesday')
  })

  it('should get the high temperature for the specific day', () => {
    wrapper.instance().getAPIData()
    expect(weatherCards.forecast.simpleforecast.forecastday[0].high.fahrenheit).toEqual('51')
  })

  it('should get the low temperature for the specific day', () => {
    wrapper.instance().getAPIData()
    expect(weatherCards.forecast.simpleforecast.forecastday[0].low.fahrenheit).toEqual('32')
  })

    it('should render an image for weather for specific day', () => {
  expect(wrapper.find('img').length).toBe(10)
})

  it('should render an h1 tag for day of week', () => {
  expect(wrapper.find('h1').length).toBe(10)
})

  it('should render p tag for high and low temperatures', () => {
  expect(wrapper.find('p').length).toBe(20)
})



})