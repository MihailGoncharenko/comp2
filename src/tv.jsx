//Компонент отвечающий за телепрограмму. Содержит компоненты пары
import React from 'react'
import Pair from './pair'

const pair1 = {
  first: 'ТНТ.Best',
  second: 'ТНТ International'
}

const pair2 = {
  first: 'Джинглики',
  second: 'Карусель INT'
}
const pair3 = {
  first: 'Наедине со всеми',
  second: 'Первый'
}


function TV(props) {
  const {time} = props;
  return (
    <div class='tv'>
      <h4> Телепрограмма</h4>
      <p>{time.time1} <Pair item={pair1}/></p>
      <p>{time.time2} <Pair item={pair2}/></p>
      <p>{time.time3} <Pair item={pair3}/></p>
    </div>
  )
}

export default TV