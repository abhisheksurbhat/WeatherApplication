import React from 'react';
import { mount } from 'enzyme';

import CityInput from './index';

describe('CityInput', () => {
  it('it renders successfully', () => {
    const app = mount(<CityInput />);
    expect(app).toBeTruthy();
  });
});