import React from 'react';
import axios from 'axios';

import CityInput from './components/city-input';
import CardContainer from './components/card-container';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: null,
    }
  }

  handleCityChange = (city) => {
    axios.get('http://localhost:5000/getWeatherData', 
      {
        headers: {'city': city}
    })
    .then((res) => {
      this.setState({cityData: res.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h1 className="text-center">Weather Application</h1>
            <CityInput handleCity={this.handleCityChange}/>
          </div>
        </div>
        {this.state.cityData ? 
            <CardContainer cityData={this.state.cityData}/>
          : null}
      </div>
    );
  }
}

export default App;
