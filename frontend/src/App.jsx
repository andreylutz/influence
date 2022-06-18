import { Provider } from 'react-redux';

// import { Events } from './components/Events';
import NavBar from './components/nav/NavBar';
import SideBar from './components/nav/SideBar';

import {
  // Outlet,
  Route,
  Routes
} from 'react-router-dom';

// React components (JSX)
import UserProfile from './components/UserProfile/UserProfile';
import UserEvents from './components/UserProfile/UserEvents';
import UserMyEvents from './components/UserProfile/UserMyEvents';
import UserFriends from './components/UserProfile/UserFriends'
import UserMembership from './components/UserProfile/UserMembership';
import UserStatus from './components/UserProfile/UserStatus';

import store from './store';

function App() {
  const user = true;
  return (
    <Provider store={store}>

      <div className='mainDiv'>
      <NavBar/>
      {user && <SideBar/>}
      <Routes>
        <Route path="/" element={<UserProfile />}>
          <Route path="/status" element={<UserStatus />} />
          <Route path="events" element={<UserEvents />} />
          <Route path="myevents" element={<UserMyEvents />} />
          <Route path="friends" element={<UserFriends />} />
          <Route path="membership" element={<UserMembership />} />
        </Route>
      </Routes>

      </div>

    </Provider>
  );
}

export default App;
