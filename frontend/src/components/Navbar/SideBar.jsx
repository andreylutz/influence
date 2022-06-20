import Works from '../UserProfile/Works'

import { Link } from 'react-router-dom'
import Aside from './Aside'


function SideBar() {
  return (

    <div style={{ display: 'flex' }}>
      <div className='sideBarContainer fb-first'>
        <div className='first__nav'>
          <h5 className='navSideBar__title'>Навигация</h5>
          <nav className="navSideBar">
            <ul className="ulSideBar">
              <li><Link to={'/'}>Профиль</Link></li>
              <li><Link to={'/event'}>Мероприятия</Link></li>
              <li><Link to={'/myevent'}>Мои мероприятия</Link></li>
              <li><Link to={'/influencers'}>Инфлюенсеры</Link></li>
              <li><Link to={'/contacts'}>Контакты</Link></li>
            </ul>
          </nav>
        </div>
        {/* <UserProfile /> */}
      </div>
      <div className='fb-second'>
        <Works />
      </div>
      <div className='fb-third'>
        <Aside />
      </div>
    </div>


  )
}

export default SideBar
