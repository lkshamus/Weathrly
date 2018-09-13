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

  it('should have a default state', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(wrapper.state()).toEqual({"isLoaded": false, "location": "", "weatherCards": []});
  });

  it('should render on the page', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
  
});







require('jest-localstorage-mock');