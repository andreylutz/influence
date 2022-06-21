import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function UserStatic() {

  const dispatch = useDispatch();


  const us = useSelector(state => state.user.id)

  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch('http://localhost:4000/api/info', {
        method: 'POST', // или 'PUT'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ us }),
      });
      const json = await response.json();
      // console.log(json[0]);
      setUser(json[0]);

    }
    fetchFunc()
  }, [us])

  return (
    <>
      <div className='user__profile'>
        <div className='userProfile__container'>
          <div className='upper_container'>
            <div className='upper__content'>
              <img className='upper__content-img' src="https://wallpaperaccess.com/full/203564.jpg" alt="" />
              <div className='left-box__photo'>{ }</div>
            </div>
            <div className='lower__content'>
              <div className='lower__content-leftBox'>
                <div>
                  {(user) ? <h3>{user.name} {user.surname}</h3> : <h3>{''}</h3>}
                  {(user) ? <span className='user__span'>{user.location}</span> : <span>{''}</span>}
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
                  <li className='navigation__list-item'><Link to={'/info'} className="navigation__link">Информация</Link></li>
                  <li className='navigation__list-item'><Link to={'/friends'} className="navigation__link">Друзья</Link></li>
                  <li className='navigation__list-item'><Link to={'/membership'} className="navigation__link">Кооперация</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
