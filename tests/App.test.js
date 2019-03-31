import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import '@babel/polyfill';

// const request = require('supertest');
// const express = require('express');

// const app = express();

beforeAll(async () => {
  const wrapper = shallow(<App />);
  return { wrapper };
});

afterAll(async () => {
  
});

describe('API Test', () => {
  it('Should return data when the page is refreshed', async () => {
    
  });

  it('Should return 100 pieces of information', async () => {
    
  })

  it('Should return the correct data shape', async () =>  {
    
  });

  it('Should return 108 stock data points for each time filter', async () => {
    
  })
});
