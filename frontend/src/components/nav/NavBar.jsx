import './nav.css';

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
                <li><a href="/">Главная</a></li>
                <li><a href="/">Настройки</a></li>
                <li><a href="/">Регистрация</a></li>
                <li><a href="/" onClick={handleClose}>Выйти</a></li>
        </ul>
      </nav>
    </div>
  )
}


export default NavBar
