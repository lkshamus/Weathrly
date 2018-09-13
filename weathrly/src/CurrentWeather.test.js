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
  
})