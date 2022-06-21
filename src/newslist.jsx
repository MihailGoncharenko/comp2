import React from 'react'
import News from './news'
import Bluesphere from './images/bluesphere.png'

const news1 = {
  icon: './images/bluesphere.png',
  text: 'Путин упростил получение автомобильных номеров',
  link: 'google.com'
}

const news2 = {
  icon: './images/bluesphere.png',
  text: 'В команде зеленского раскрыли план реформ на Украине',
  link: 'google.com'
}
const news3 = {
  icon: './images/rgru.png',
  text: '«Турпомощь» прокомментировала гибель десятков россиян в Анталье',
  link: 'google.com'
}
const news4 = {
  icon: './images/idk.png',
  text: 'Суд закрыл дело Демпартии США против России',
  link: 'google.com'
}
const news5 = {
  icon: './images/g.png',
  text: 'На Украине призвали создать ракеты для удара по Москве',
  link: 'google.com'
}

function NewsList(props) {
  const {over} = props;
  return (
    <div class='news'>
      <p  class="newsover"> Сейчас в СМИ В {over.country} Рекомендуем</p>
      <img src={Bluesphere} class='icon'></img>  <News item={news1}/>
      <News item={news2}/>
      <News item={news3}/>
      <News item={news4}/>
      <News item={news5}/>
    </div>
  )
}

export default NewsList