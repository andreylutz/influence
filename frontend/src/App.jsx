// React Components
import { useSelector } from 'react-redux';
import NavBar from './components/Navbar/NavBar';
import SideBar from './components/Navbar/SideBar';
import { Main } from './components/Main';

function App() {
  const user = useSelector((state) => state.user.auth);

  return (
    <>
      {!user ? <Main /> : <NavBar />}
      {user && <SideBar />}
    </>
  );
}

export default App;
