import { useSelector } from 'react-redux';

// React Components
import NavBar from './components/Navbar/NavBar';
import SideBar from './components/Navbar/SideBar';
import Main from './components/Main/Main';
import { useEffect } from 'react';

function App() {
  const user = useSelector((state) => state.user.auth);
  return (
    <>
      {!user ? <Main path="/main" /> : <NavBar />}
      {user && <SideBar />}
    </>
  );
}

export default App;
