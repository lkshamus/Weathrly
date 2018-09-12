import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper 

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

it('should exist', () => {
  expect(wrapper).toBeDefined();
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('should retrieve data from local storage on mount', () =>{

  const location = [
    {'weathrly': 'Denver, CO'},
  ]

  localStorage.setItem('weathrly', JSON.stringify(location))

  wrapper = mount(<App />);

  expect(wrapper.state().location).toEqual({'weathrly': 'Denver, CO'});
})
})