//Компонент отвечающий за карту.
import React from 'react'

function Map(props) {
    const {over} = props;
  return (
  <div  class='map'>
    <h4>Карта {over.country}</h4>
    <p>Расписания</p>
    </div>
  )
}

export default Map