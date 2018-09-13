import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import CurrentWeatherCard from './CurrentWeatherCard';

describe('CurrentWeatherCard', () => {
  
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<CurrentWeatherCard />)
  })

  it('should exist', () => {
  expect(wrapper).toBeDefined();
})
  
})