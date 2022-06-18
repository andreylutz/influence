import { Provider } from 'react-redux';


import NavBar from './components/nav/NavBar';
import SideBar from './components/nav/SideBar';

import store from './store';
  
function App() {
  const user = true;
  return (
    <Provider store={store}>
      <NavBar />
      {user && <SideBar />}
    </Provider>
  );
}

export default App;
