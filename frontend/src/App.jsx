import { Provider } from 'react-redux';

// React Components
import NavBar from './components/Navbar/NavBar';
import SideBar from './components/Navbar/SideBar';
import { Main } from './components/Main';

import store from './store';


function App() {
  const user = true;
  return (

    <Provider store={store}>
      {(!user) ? <Main /> : <NavBar />}
      {user && <SideBar />}
    </Provider>

  );
}

export default App;
