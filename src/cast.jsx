//Компонент эфира. Содержит компоненты пары
import React from 'react'
import Pair from './pair'

const pair1 = {
  first: 'Управление как искусство',
  second: 'Успех'
}

const pair2 = {
  first: 'Ночь. Мир в это время',
  second: 'earthTV'
}
const pair3 = {
  icon: 'Андерей Возн...',
  second: 'Совершенно секретно'
}


function TV() {
  return (
    <div class='cast'>
      <h4> Эфир</h4>
      <p><Pair item={pair1}/></p>
      <p><Pair item={pair2}/></p>
      <p><Pair item={pair3}/></p>
    </div>
  )
}

export default TV