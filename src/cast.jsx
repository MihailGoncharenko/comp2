import React from 'react'
import Pair from './pair'

const pair1 = {
  first: 'Управление как искусство',
  second: 'Успех'
}

const pair2 = {
  icon: 'Ночь. Мир в это время',
  text: 'earthTV'
}
const pair3 = {
  icon: 'Андерей Возн...',
  text: 'Совершенно секретно'
}


function TV() {
  return (
    <div class='cast'>
      <p  class="bluetitle"> Эфир</p>
      <Pair item={pair1}/>
      <Pair item={pair2}/>
      <Pair item={pair3}/>
    </div>
  )
}

export default TV