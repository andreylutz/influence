import { Provider } from 'react-redux';

import NavBar from './components/nav/NavBar';
import SideBar from './components/nav/SideBar';
import  Main  from './components/Main/Main';

import store from './store';

function App() {
  const user = localStorage.getItem('user');
  // const user = false;
  return (
    <Provider store={store}>
      {!user ? <Main path="/main"/> : <NavBar />}
      {user && <SideBar />}
    </Provider>
  );
}

export default App;
