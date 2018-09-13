import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SevenHourCard from './SevenHourCard';
import {data} from './API';

describe('SevenHourCard', () => {
  
  let wrapper;
  let weatherCards = data;

  beforeEach(()=> {
    wrapper = shallow(<SevenHourCard weather={data}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should get data for the current city', () => {
    wrapper.instance().getAPIData();
    expect(weatherCards.current_observation.display_location.full).toEqual('Louisville, KY');
  });

  it('should get the current hour for each card', () => {
    wrapper.instance().getAPIData();
    expect(weatherCards.hourly_forecast[0].FCTTIME.civil).toEqual('12:00 PM');
  });

  it('should get the condition for each hour', () => {
    wrapper.instance().getAPIData();
    expect(weatherCards.hourly_forecast[0].condition).toEqual('Partly Cloudy');
  });

  it('should get the high temperature for the current hour', () => {
    wrapper.instance().getAPIData();
    expect(weatherCards.hourly_forecast[0].temp.english).toEqual('47');
  });

  it('should get the wind for the current hour', () => {
    wrapper.instance().getAPIData();
    expect(weatherCards.hourly_forecast[0].wspd.english).toEqual('11');
  });
});