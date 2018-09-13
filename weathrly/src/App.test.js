import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';


describe('App', () => {

  let wrapper; 

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should retrieve data from local storage on mount', () =>{

    const location = "Denver, CO";
  
    wrapper.instance().updateLocalStorage(location);

    expect(localStorage).toEqual({ "weathrly": "\"Denver, CO\""});
  });

  it('should only load if it has state', () => {

  });

  it('should display header' () => {

  });
});







require('jest-localstorage-mock');