import React from 'react';
import { mount } from 'enzyme';

import Error from './index';

describe('Error', () => {
  it('it renders successfully', () => {
    const app = mount(<Error />);
    expect(app).toBeTruthy();
  });
});