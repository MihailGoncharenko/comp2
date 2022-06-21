import React from 'react'

function Weather(props) {
    const {item} = props;
  return (
    <div class='weather'>
        <img src={item.icon}></img>  {item.maintemp}   
        <p>Утром {item.morning}, днем {item.day}</p>
    </div>
  )
}

export default Weather