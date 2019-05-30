import React from 'react';
import { mount } from 'enzyme';

import CardContainer from './index';

let stubData = [
    {
      "description": "broken clouds",
      "city": "Bangalore",
      "date": "29-05-2019",
      "temp": 23.87,
      "wind": 4.1,
      "main": "Clouds"
    },
    {
      "description": "light rain",
      "city": "Bangalore",
      "date": "30-05-2019",
      "temp": 27.322578125,
      "wind": 4.811171875,
      "main": "Rain"
    },
    {
      "description": "light rain",
      "city": "Bangalore",
      "date": "31-05-2019",
      "temp": 25.406093750000004,
      "wind": 5.959296875,
      "main": "Rain"
    },
    {
      "description": "overcast clouds",
      "city": "Bangalore",
      "date": "01-06-2019",
      "temp": 26.609531250000003,
      "wind": 5.098281249999999,
      "main": "Clouds"
    },
    {
      "description": "moderate rain",
      "city": "Bangalore",
      "date": "02-06-2019",
      "temp": 27.293359375,
      "wind": 4.59859375,
      "main": "Rain"
    }
  ]

describe('Card Container', () => {
  it('it renders successfully', () => {
    const app = mount(<CardContainer cityData={stubData}/>);
    expect(app).toBeTruthy();
  });
});