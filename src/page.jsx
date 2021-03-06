//Основной компонент, содержащий все остальные
import React from 'react'
import Banner from './banner';
import NewsList from './newslist'
import Search from './search';
import Weather from './weather';
import TV from './tv';
import Cast from './cast';
import Popular from './popular';
import Map from './map';

const example = {
  example: 'Фаза Луны сегодня',
}

const ad = {
  ad: './images/forsaj.png',
}

const over = {
  country: 'Германии',
}

const weather = {
  icon: './images/rain.png',
  maintemp: '+17',
  morning: '+17',
  day: '+20'
}

const time = {
  time1: '02:00',
  time2: '02:15',
  time3: '02:25'
}

const popular = {
  main1: 'Недвижимость',
  secondary1: 'о сталинках',
  main2: 'Маркет',
  secondary2: 'люстры и светильники',
  main3: 'Авто.ру',
  secondary3: 'Авто.ру',
}

function Page() { 
  return (
    <>
      <NewsList over = {over}/>    
      <Search example = {example}/>
      <Banner ad = {ad}/>
      <Weather item = {weather}/>
      <TV time = {time}/>
      <Cast/>
      <Popular item={popular}/>
      <Map over={over}/>
    </>
  ) 
}

export default Page