import React from 'react';
import axios from 'axios';

import CityInput from './components/city-input';
import CardContainer from './components/card-container';
import Error from './components/error';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityData: null,
      error : false
    }
  }

  handleCityChange = (city) => {
    axios.get('http://localhost:5000/getWeatherData', 
      {
        headers: {'city': city}
    })
    .then((res) => {
      this.setState({
        cityData: res.data,
        error: false
      });
    })
    .catch((err) => {
      this.setState({error: true});
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
        {this.state.error ? 
            <Error />
          : this.state.cityData !== null ? 
            <CardContainer cityData={this.state.cityData}/>
            : <div></div>
        }
      </div>
    );
  }
}

export default App;
