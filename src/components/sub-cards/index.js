import React from 'react';

const SubCards = (props) => {
  return (
      <div className="d-flex flex-column m-1 p-3 justify-content-center" 
        style={{background: 
          props.getBackground(props.cityData.main),
          border: 'solid 1px gray'}}>
        <img src={props.getIcon(props.cityData.main)}
          width="50px"
          height="50px"
          alt="Weather Icon"/>
        <p>{props.cityData.temp.toFixed(2)} °C</p>
        <p>{props.cityData.date}</p>
      </div>
    
  )
}

export default SubCards;