import React from 'react'
import Pair from './pair'

const pair1 = {
  first: 'ТНТ.Best',
  second: 'ТНТ International'
}

const pair2 = {
  icon: 'Джинглики',
  text: 'Карусель INT'
}
const pair3 = {
  icon: 'Наедине со всеми',
  text: 'Первый'
}


function TV(props) {
  const {time} = props;
  return (
    <div class='tv'>
      <p  class="bluetitle"> Телепрограмма</p>
      {time.time1} <Pair item={pair1}/>
      {time.time2} <Pair item={pair2}/>
      {time.time3} <Pair item={pair3}/>
    </div>
  )
}

export default TV