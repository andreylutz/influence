import '../Navbar/nav.css';
import { Link } from 'react-router-dom'

function NavBar() {
  const handleClose = () => {
    fetch('http://localhost:4000/api/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    localStorage.removeItem('user');
  }
  return (
    <div className='headerContainer'>
      <nav className='navBar'>
        <ul className='ulBar'>
          <>
            <li><a href="/" onClick={handleClose}>Выйти</a></li>
            <li><Link to="/userEdit">Настройки</Link></li></>
        </ul>
      </nav>
    </div >
  )
}


export default NavBar
