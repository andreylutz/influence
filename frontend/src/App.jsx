import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Events } from './components/Events';
import NavBar from './components/nav/NavBar';
import SideBar from './components/nav/SideBar';

import store from './store';

function App() {
  const user = true;
  return (
    <Provider store={store}>
      <NavBar/>
      {user && <SideBar/>}
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </Provider>
  );
}

export default App;
