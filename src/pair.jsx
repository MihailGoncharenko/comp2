//Компонент пары
import React from 'react'

function Pair(props) {
    const {item} = props;
  return (
    <span>
        <span> {item.first} </span>  <span class='gray'> {item.second} </span>
    </span>
  )
}

export default Pair