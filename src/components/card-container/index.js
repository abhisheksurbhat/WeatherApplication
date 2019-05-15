import React from 'react';
import './index.css';
import Rain from '../../assets/icons/rain.svg';
import Clouds from '../../assets/icons/clouds.svg';
import Clear from '../../assets/icons/clear.svg';

class CardContainer extends React.Component {

  getIcon = (type) => {
    const Icon = {
      Rain,
      Clouds,
      Clear
    }
    return Icon[type];
  }

  render () {
    let { cityData } = this.props;
    return (
      <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <div className="card mt-5">
          <div className="card-header d-flex flex-row flex-wrap border-0">
            <div>
              <img src={this.getIcon(cityData.list[0].weather[0].main)}
                 alt="Weather Icon Here"
                 width="75"
                 height="75" />
              <h5 className="card-title">{cityData.city.name}</h5>
              <p className="card-text">
                {cityData.list[0].weather[0].description}
              </p>
            </div>
            <div className="align-self-center ml-2">
              <div className="d-flex flex-row">
                <h5 className="card-title">Temperature: </h5>
                <p className="ml-2">
                  {cityData.list[0].main.temp} °C
                </p>
              </div>
              <div className="d-flex flex-row">
                <h5 className="card-text">Wind Speed: </h5>
                <p className="ml-2">
                  {(cityData.list[0].wind.speed*3600)/1000} kph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CardContainer;