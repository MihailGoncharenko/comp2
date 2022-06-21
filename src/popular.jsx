import React from 'react'

function Popular(props) {
    const {item} = props;
  return (
    <div class='popular'>
        <p class="bluetitle">Посещаемое</p>
        <p>{item.main1} — {item.secondary1} </p>
        <p>{item.main2} — {item.secondary1}</p>
        <p>{item.main3} — {item.secondary1}</p>
        
    </div>
  )
}

export default Popular