/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import News from '../pages/News'

export default function NewsItems({newsItem}) {
   

  return (
    <div>
        <img className='w-40' src={newsItem.Baner} alt={newsItem.title} />
        <h4>{newsItem.cateGory}</h4>
        <h1>{newsItem.title}</h1>
        <img src={newsItem.authorProfile} alt={newsItem.author} />
        <h4>{newsItem.author}</h4>
        <span>{newsItem.addedDate}</span>

    </div>
  )
}
