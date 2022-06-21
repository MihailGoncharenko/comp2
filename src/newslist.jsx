//Компонент списка новостей, включающий в себя компоненты отдельных новостей. 
import React from 'react'
import News from './news'
import Bluesphere from './images/bluesphere.png'
import RGRU from './images/rgru.png'
import idk from './images/idk.png'
import G from './images/g.png'

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
      <h4  class="newsover"> Сейчас в СМИ В {over.country} Рекомендуем</h4>
      <div><img src={Bluesphere}></img>  <News item={news1}/></div>
      <div><img src={Bluesphere}></img><News item={news2}/></div>
      <div><img src={RGRU}></img><News item={news3}/></div>
      <div><img src={idk}></img><News item={news4}/></div>
      <div><img src={G}></img><News item={news5}/></div>
    </div>
  )
}

export default NewsList