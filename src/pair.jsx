import React from 'react'

function Pair(props) {
    const {item} = props;
  return (
    <div>
        <div> {item.first} </div>  <div> {item.second} </div>
    </div>
  )
}

export default Pair