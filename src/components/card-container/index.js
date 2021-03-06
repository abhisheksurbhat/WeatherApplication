import React from 'react';

import './index.css';
import SubCards from '../sub-cards';
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

  getBackground = (type) => {
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

  render () {
    let { cityData } = this.props;
    return (
      <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <div className="card mt-5">
          <div className="card-header d-flex flex-row justify-content-between" 
            style={{background:
              this.getBackground(cityData[0].main)}}>
            <div>
              <img src={this.getIcon(cityData[0].main)}
                 alt="Weather Icon Here"
                 width="75"
                 height="75" />
              <h3 className="card-title">{cityData[0].city}</h3>
              <p className="card-text ">
                {cityData[0].description.toUpperCase()}
              </p>
            </div>
            <div className="align-self-center ml-5">
              <div className="d-flex flex-row">
                <h5 className="card-title">Temperature: </h5>
                <p className="ml-2">
                  {cityData[0].temp.toFixed(2)} °C
                </p>
              </div>
              <div className="d-flex flex-row">
                <h5 className="card-text">Wind Speed: </h5>
                <p className="ml-2">
                  {((cityData[0].wind*3600)/1000).toFixed(2)} kph
                </p>
              </div>
              <div className="d-flex flex-row">
                <h5 className="card-text">Date: </h5>
                <p className="ml-2">
                  {cityData[0].date}
                </p>
              </div>
            </div>
          </div>
          <div
            className="card-body d-flex flex-wrap p-0"
            style={{background: '#9ab1cc'}}>
          {cityData.map((city, index) => {
            if(index === 0) return null;
            else {
              return (
                  <SubCards key={index} cityData={city}
                    getBackground={this.getBackground}
                    getIcon={this.getIcon}
                  />
              )
            }
          })}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default CardContainer;