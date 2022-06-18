import Works from '../UserProfile/Works'

import { Link } from 'react-router-dom'


function sideBar() {
  return (

    <div style={{ display: 'flex' }}>
      <div className='sideBarContainer'>
        <div className='first__nav'>
          <h5 className='navSideBar__title'>Навигация</h5>
          <nav className="navSideBar">
            <ul className="ulSideBar">
              <li><Link to="/">Профиль</Link></li>
              <li><Link to="/partys">Мероприятия</Link></li>
              <li><Link to="/">Мои мероприятия</Link></li>
              <li><Link to="/">Инфлюенсеры</Link></li>
              <li><Link to="/">Контакты</Link></li>
            </ul>
          </nav>
        </div>
        {/* <UserProfile /> */}
      </div>
      <div>
        <Works />
        
      </div>
    </div>


  )
}

export default sideBar
