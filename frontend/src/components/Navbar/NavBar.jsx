import './nav.css';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='headerContainer'>
      <nav className='navBar'>
        <ul className='ulBar'>
          <>
            <li><Link to="/home">Выйти</Link></li>
            <li><Link to="/userEdit">Настройки</Link></li></>
        </ul>
      </nav>
    </div >
  )
}


export default NavBar
