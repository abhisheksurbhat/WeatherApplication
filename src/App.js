import React from 'react';
import axios from 'axios';
import CityInput from './components/city-input';


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
            <div className="row mt-5">
              <div className="card">
                <img className="card-img-top" src="..." alt="Card cap"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          : null}
      </div>
    );
  }
}

export default App;
