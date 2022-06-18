import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import UserProfile from './UserProfile';

export default function UserStatic() {
  const [state] = useState({
    avatar: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg', name: 'John', surname: 'Freeman', age: 24, location: 'Toronto', skill: 'Informational technology', email: 'netweb@gmail.com', about: `Я родился в Москве, в семидесятом.
  На краю города, моча рано ударила в голову:
  В четыре активно ругался матом.
  В детском саду девочки впервые показали мне п*зду.
  Потом школа, вонючая форма.
  Драки, клей - так я становился сильней.
  Воровал деньги в раздевалке, в восемь начал курить.
  В одиннадцать кинул первую палку, забил на родителей.` });
  return (
    <>
      <div>
        <div className='userProfile__container'>
          <div className='upper_container'>
            <div className='upper__content'>
              <img className='upper__content-img' src="https://i.pinimg.com/originals/07/64/86/0764861bfe42489baad5a07850a54b19.gif" alt="" />
            </div>
            <div className='lower__content'>
              <div className='lower__content-leftBox'>
                <div className='left-box__photo'>{ }</div>
                <div>
                  <h3>{state.name} {state.surname}</h3>
                  <span className='user__span'>{state.email}</span>
                </div>
              </div>
              <div className='lower__content-rightBox'>
                <button className='addFriend__button'>Add friend</button>
                <button className='settings__button'>settings</button>
              </div>
            </div>
            <div className='nav__content'>
              <nav className='navigation'>
                <ul className='navigation__list'>
                  <li className='navigation__list-item'><Link to={'/status'} className="navigation__link">Info</Link></li>
                  <li className='navigation__list-item'><Link to={'/events'} className="navigation__link">Events</Link></li>
                  <li className='navigation__list-item'><Link to={'/myevents'} className="navigation__link">My Events</Link></li>
                  <li className='navigation__list-item'><Link to={'/friends'} className="navigation__link">Friends</Link></li>
                  <li className='navigation__list-item'><Link to={'/membership'} className="navigation__link">Membership</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
