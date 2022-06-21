//Компонент посещаемого
import React from 'react'

function Popular(props) {
    const {item} = props;
  return (
    <div class='popular'>
        <p class="bluetitle">Посещаемое</p>
        <p><span class='bold'>{item.main1}</span> — {item.secondary1} </p>
        <p><span class='bold'>{item.main2}</span> — {item.secondary1}</p>
        <p><span class='bold'>{item.main3}</span> — {item.secondary1}</p>
        
    </div>
  )
}

export default Popular