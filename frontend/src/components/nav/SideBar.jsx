import { Link } from 'react-router-dom'

function sideBar () {
  return (
    <div className='sideBarContainer'>
      <nav className="navSideBar">
        <ul className="ulSideBar">
        <li><Link to="/">Профиль</Link></li>
        <li><Link to="/">Мероприятия</Link></li>
        <li><Link to="/">Мои мероприятия</Link></li>
        <li><Link to="/">Инфлюенсеры</Link></li>
        <li><Link to="/about">Контакты</Link></li>

        </ul>
      </nav>

    </div>
  )
}

export default sideBar
