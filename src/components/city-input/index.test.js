import React from 'react';
import { shallow } from 'enzyme';

import CityInput from './index';

describe('CityInput', () => {
  let app;
  beforeEach(() => {
    app = shallow(<CityInput />);;
  })

  it('it renders successfully', () => {
    expect(app).toBeTruthy();
  });

  const mockEvent = {
    target: {
      value: 'Bangalore'
    }
  }

  it('handles change event', () => {
    app.find('input').at(0).simulate('change', mockEvent);
    app.update();
    expect(app.state().city).toEqual('Bangalore');
  });

  const handleCity = () => {}

  it('handles click event', () => {
    const app = shallow(<CityInput handleCity={handleCity}/>);
    let func = jest.fn();
    func.mockImplementation(app.instance().selectCity);
    app.find('button').at(0).simulate('click');
    func();
    app.update();
    expect(func).toHaveBeenCalled();
    
  })
});