import './nav.css';
import { Link } from 'react-router-dom'

function NavBar() {
  const user = true
  return (
    <div className='headerContainer'>
      <nav className='navBar'>
        <ul className='ulBar'>
          {
            user ?
          <><li><Link to="/">Главная</Link></li>
          <li><Link to="/userEdit">Настройки</Link></li></>
          :
          <li><Link to="/">Зарегистрироваться</Link></li>
          }

        </ul>
      </nav>
    </div>
  )
}


export default NavBar
