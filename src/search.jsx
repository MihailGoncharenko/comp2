import React from 'react'

function Search(props) {
  const {example} = props;
  return (
    <div class='search'>
      <p  class="search-links"> Видео Картинки Новости Карты Маркет Переводчик Эфир ещё </p>
      <p  class="search-more"> Найдется все, например, {example.example} </p>
    </div>
  )
}

export default Search