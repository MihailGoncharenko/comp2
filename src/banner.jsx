//Отвечает за баннер. Так и не разобрался как динамично загружать изображения из пропсов
import React from 'react'
import './App.css';
import Ad from './images/forsaj.png'

function Banner(props) {
  const {ad} = props;
  
  return (
    <div class="banner"><img src={Ad}></img></div>
  )
}

export default Banner