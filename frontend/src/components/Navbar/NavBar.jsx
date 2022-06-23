import '../Navbar/nav.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { actionsUser } from '../../actions/actionsUser';
// import { setTheme } from '../../actions/actionsTheme';

function NavBar() {
  const dispatch = useDispatch();
  const handleClose = () => {
    fetch('http://localhost:4000/api/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
  })
  dispatch(actionsUser.logout())
};


  const theme = useSelector((state) => state.theme);

  // const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="headerContainer">
      <nav className="navBar">
        <ul className="ulBar">
          <>
            {/*<div onClick={toggleTheme}>*/}
            {/*  {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}{' '}*/}
            {/*  <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>*/}
            {/*</div>*/}
            <li>
              <a href="/" onClick={handleClose}>
                Выйти
              </a>
            </li>
            <li>
              <Link to="/userEdit">Настройки</Link>
            </li>
          </>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
