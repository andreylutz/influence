import React from 'react'

import EventItem from './EventItem'



export default function UserEvents() {
  const events = [{ name: 'Delmar', location: 'Spain', picture: '...', date: '12.05.2022' }, { name: 'Creep', location: 'New York', picture: '...', date: '01.01.2021' }, { name: 'LA', location: 'Japan', picture: '...', date: '31.08.2022' }]
  return (
    <div className='userProfile__container'>
      <ul style={{ display: 'flex' }}>
        {events.map((el) => <EventItem el={el} />)}
      </ul>
    </div>
  )
}
