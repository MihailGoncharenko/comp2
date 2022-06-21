//Компонент отвечающий за погоду
import React from 'react'
import Icon from './images/rain.png'

function Weather(props) {
    const {item} = props;
  return (
    <div class='weather'>
        <img src={Icon}></img>  {item.maintemp}   
        <p>Утром {item.morning}, днем {item.day}</p>
    </div>
  )
}

export default Weather