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