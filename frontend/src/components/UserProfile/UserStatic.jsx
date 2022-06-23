import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function UserStatic() {

  const nav = useNavigate()

  const settings = () => {
    nav('/userEdit')
  }

  const dispatch = useDispatch();


  const us = useSelector(state => state.user.id)
  const role = useSelector(state => state.user.role)


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

      console.log(json.company);
      if (json.user) {
        setUser(json.user)
      }
      if (json.company) {
        setUser(json.company)
      }
      // setUser(json[0]);
    }
    fetchFunc()
  }, [])

  return (
    <>
      {role === 'user' ?
        <>
          <div className='user__profile'>
            <div className='userProfile__container'>
              <div className='upper_container'>
                <div className='upper__content'>
                  <img className='upper__content-img' src="https://pa1.narvii.com/6433/0fb7c75a4bfd501a61047752c1d0caadb404c8b6_hq.gif" alt="" />
                  <div className='left-box__photo'><img src={user.avatar} alt="" /></div>
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
                    <button onClick={settings} className='settings__button'>Настройки</button>
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
        </> :
        <>
          <div className='user__profile'>
            <div className='userProfile__container'>
              <div className='upper_container'>
                <div className='upper__content'>
                  <img className='upper__content-img' src="https://pa1.narvii.com/6433/0fb7c75a4bfd501a61047752c1d0caadb404c8b6_hq.gif" alt="" />
                  <div className='left-box__photo'><img src={user.logo} alt="" /></div>
                </div>
                <div className='lower__content'>
                  <div className='lower__content-leftBox'>
                    <div>
                      {(user) ? <><span>{'Компания'}</span><h3 >{user.companyName}</h3></> : <h3>{''}</h3>}
                      {(user) ? <span className='user__span'>{user.location}</span> : <span>{''}</span>}
                    </div>
                  </div>
                  <div className='lower__content-rightBox'>
                    <button  className='addFriend__button'>Add friend</button>
                    <button onClick={settings} className='settings__button'>Настройки</button>
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
      }

    </>
  )
}
