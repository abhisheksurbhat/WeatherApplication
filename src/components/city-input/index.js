import React from 'react';

class CityInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: ""
    }
    this.handleCityInput = this.handleCityInput.bind(this);
    this.selectCity = this.selectCity.bind(this);
  }

  handleCityInput = (e) => {
    this.setState({city: e.target.value});
  }

  selectCity = () => {
    this.props.handleCity(this.state.city);
  }

  render () {
    return (
      <div className="mt-4">
        <h4 className="mt-5">
          Enter the city for which you want to get weather data
        </h4>
        <div className="d-flex flex-wrap">
          <input type="text" className="form-control mt-4 w-25" aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={this.handleCityInput} />
          <button className="btn btn-primary mt-4 ml-5" onClick={this.selectCity}>
            Go
          </button>
          
        </div>
      </div>
    );
  }
}

export default CityInput;