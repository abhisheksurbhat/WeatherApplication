import React from 'react';

class CardContainer extends React.Component {

  render () {
    return (
      <div className="card d-flex flex-row flex-wrap w-50 mt-5">
        <div className="card-header border-0">
            <img src="https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_CloudSun.png"
               alt="Sunny Icon Here"
               width="200"
               height="200" />
        </div>
        <div className="card-block px-5 ml-5 mt-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Description</p>
            
        </div>
        <div className="w-100"></div>
    </div>
    );
  }
}

export default CardContainer;