import { useSelector, useDispatch } from 'react-redux';

// React Components
import NavBar from './components/Navbar/NavBar';
import SideBar from './components/Navbar/SideBar';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import { auth } from './api/user';

function App() {
  const userAuth = useSelector((state) => state.user.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userAuth) {
      dispatch(auth());
    }
  }, [dispatch, userAuth]);

  return (
    <>
      {!userAuth ? <Main path="/main" /> : <NavBar />}
      {userAuth && <SideBar />}
    </>
  );
}

export default App;
