import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App js', () => {
  it('it renders first time', () => {
    const app = shallow(<App />);
    expect(app.find('.container').exists());
  });
});