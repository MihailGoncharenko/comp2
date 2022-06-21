//Отвечает за несуществующую строку поиска, ссылки сверху и "например"
import React from 'react'

function Search(props) {
  const {example} = props;
  return (
    <div class='search'>
      <h4  class="search-links"> Видео   Картинки   Новости   Карты   Маркет   Переводчик   Эфир   ещё </h4>
      <p  class="search-more"> Найдется все, например, <span class='gray'>{example.example}</span> </p>
    </div>
  )
}

export default Search