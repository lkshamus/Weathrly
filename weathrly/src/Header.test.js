import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import {data} from './API';

describe('Header', () => {
  
  let wrapper;
  let weatherCards = data;

  beforeEach(()=> {
    wrapper = shallow(<Header 
      weather={data}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render a input field', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should render a submit button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should have an empty input field', () => {
    expect(wrapper.state().input).toEqual(undefined);
  });

  it('should change the state after enters a location', () => {
    let searchBar = wrapper.find('input');
    let event = {
      target: {
        value: 'location'
      }
    }
    searchBar.simulate('change', event);
    expect(wrapper.state().searchBar).toEqual();
  });

  it('should display suggestions based on what the user types in', () => {

  })
});