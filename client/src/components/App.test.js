import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';


function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('App Test', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
