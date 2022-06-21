//Компонент отвечающий за конкретную новость. Так и не разобрался как динамично загружать изображения из пропсов
import React from 'react'

function News(props) {
    const {item} = props;
  return (
    <span>
         <a href={item.link} rel="noreferrer">{item.text}</a>
    </span>
  )
}

export default News