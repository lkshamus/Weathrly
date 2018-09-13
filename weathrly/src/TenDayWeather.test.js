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

})