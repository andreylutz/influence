import React from 'react'

export default function Aside() {
  return (
    <div className='aside__conteiner'>
      <p>A-SIDE</p>
      <ul>
        <li>Friend1</li>
        <li>Friend2</li>
        <li>Friend3</li>
        <li>Friend4</li>
        <li>Friend5</li>
      </ul>
      <div id="map" style={{ width: '300px', height: '400px' }}></div>
    </div>
  )
}
