import React from 'react'

export default function EventItem({el}) {
  return (
    <li style={{marginRight: '20px'}}>
      <span>{el.name}</span>
      <span>{el.location}</span>
      <span>{el.date}</span>
    </li>    
  )
}
