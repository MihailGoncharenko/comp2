import React from 'react'

function News(props) {
    const {item} = props;
  return (
    <div>
         <a href={item.link} rel="noreferrer">{item.text}</a>
    </div>
  )
}

export default News