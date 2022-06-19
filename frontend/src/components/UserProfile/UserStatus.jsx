import React, { useState } from 'react'

export default function UserStatus() {
  const [state] = useState({
    avatar: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg', name: 'John', surname: 'Freeman', age: 24, location: 'Toronto', skill: 'Informational technology', email: 'netweb@gmail.com', about: `Я родился в Москве, в семидесятом.
  На краю города, моча рано ударила в голову:
  В четыре активно ругался матом.
  В детском саду девочки впервые показали мне п*зду.
  Потом школа, вонючая форма.
  Драки, клей - так я становился сильней.
  Воровал деньги в раздевалке, в восемь начал курить.
  В одиннадцать кинул первую палку, забил на родителей.` });

  const [news, setNews] = useState('');

  
  return (
    <div className='user__status-container'>
      <div className='user__status-box'>
        <ul>
          <h4 className='user__status-about'>About</h4>
          <li>
            <p>{state.about}</p>
          </li>
        </ul>
      </div>
      <div className='user__status-wall'>
        <h4 className='user__status-title'>Posts</h4>

      </div>
    </div>
  )
}
