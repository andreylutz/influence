import React from 'react'

import {
  // Outlet,
  Route,
  Routes
} from 'react-router-dom';

// React components(JSX)
import UserProfile from './UserProfile';
import UserEvents from './UserEvents';
import UserMyEvents from './UserMyEvents';
import UserFriends from './UserFriends'
import UserMembership from './UserMembership';
import UserStatus from './UserStatus'

export default function Works() {
  return (
    <div>
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
  )
}
