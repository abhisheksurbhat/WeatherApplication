import React from 'react';

const SubCards = (props) => {
  return (
      <div className="d-flex flex-column m-1 p-3 justify-content-center" 
        style={{background: 
          props.getBackground(props.cityData.weather[0].main),
          border: 'solid 1px gray'}}>
        <img src={props.getIcon(props.cityData.weather[0].main)}
          width="50px"
          height="50px"
          alt="Weather Icon"/>
        <p>{props.cityData.main.temp} °C</p>
        <p>{props.getDate(props.cityData.dt_txt)}</p>
      </div>
    
  )
}

export default SubCards;