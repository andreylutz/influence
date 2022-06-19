import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionsUser } from '../../actions/actionsUser';

function NavBar() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleClose = () => {
    fetch('http://localhost:4000/api/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    dispatch(actionsUser.logout());
    nav('/');
  };

  const user = false;
  return (
    <div className="headerContainer">
      <nav className="navBar">
        <ul className="ulBar">
          {user ? (
            <>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/">Настройки</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" onClick={handleClose}>
                  Выйти
                </Link>
              </li>
              <li>
                <Link to="/">Мои настройки</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
