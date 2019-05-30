import React from 'react';
import { mount } from 'enzyme';

import SubCards from './index';
import Rain from '../../assets/icons/rain.svg';
import Clouds from '../../assets/icons/clouds.svg';
import Clear from '../../assets/icons/clear.svg';

let stubData = {
    "description": "moderate rain",
    "city": "Bangalore",
    "date": "02-06-2019",
    "temp": 27.293359375,
    "wind": 4.59859375,
    "main": "Rain"
}

const getIcon = (type) => {
    const Icon = {
      Rain,
      Clouds,
      Clear
    }
    return Icon[type];
  }

const getBackground = (type) => {
    switch (type) {
      case "Rain":
        return "darkgray";
      case "Clear":
        return "aliceblue";
      case "Clouds":
        return "lightgray"
      default:
        return "aliceblue";
    }
  }

describe('Sub Cards', () => {
  it('it renders successfully', () => {
    const app = mount(<SubCards cityData={stubData}
        getBackground={getBackground}
        getIcon={getIcon}/>);
    expect(app).toBeTruthy();
  });
});