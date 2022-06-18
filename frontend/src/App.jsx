import { Provider } from 'react-redux';

import NavBar from './components/nav/NavBar';
import SideBar from './components/nav/SideBar';
import { Main } from './components/Main';

import store from './store';

function App() {
  const user = true;
  return (
    <Provider store={store}>
      {!user ? <Main /> : <NavBar />}

      {user && <SideBar />}
    </Provider>
  );
}

export default App;
