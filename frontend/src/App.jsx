import { Provider } from 'react-redux';
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
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<UserProfile />}>
          <Route path="/status" element={<UserStatus />} />
          <Route path="events" element={<UserEvents />} />
          <Route path="myevents" element={<UserMyEvents />} />
          <Route path="friends" element={<UserFriends />} />
          <Route path="membership" element={<UserMembership />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
