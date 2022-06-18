import './nav.css';
import { Link } from 'react-router-dom'

function NavBar() {
  const user = false;
  return (
    <div className='headerContainer'>
      <nav className='navBar'>
        <ul className='ulBar'>
          {
            user ?
              <>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/">Настройки</Link></li>
              </>
              :
              <>
                <li><Link to="/">Регистрация</Link></li>
                <li><Link to="/">Войти</Link></li>
              </>
          }

        </ul>
      </nav>
    </div>
  )
}


export default NavBar
