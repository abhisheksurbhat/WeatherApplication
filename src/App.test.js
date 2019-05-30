import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import App from './App';

describe('App js', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  })
  
  it('renders first time', () => {
    expect(app.find('.container').exists());
  });

  it('handles error correctly', () => {
    let mock = new MockAdapter(axios);
    mock.onGet('http://localhost:5000/getWeatherData', {}, {'city': 'asdnais'})
      .reply(404, app.state().error=true);
    app.instance().handleCityChange('asdnais');
    expect(app.state().error).toEqual(true);
  });
});