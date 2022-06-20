import React from 'react'

import {
  Route,
  Routes
} from 'react-router-dom';

// React components(JSX)
import UserProfile from './UserProfile';
import UserEvents from './UserEvents';
import UserMyEvents from './UserMyEvents';
import UserFriends from './UserFriends'
import UserMembership from './UserMembership';
import UserStatus from './UserStatus';
import Contacts from '../Contacts/Contacts';
import Influencers from '../Influencers/Influencers';



export default function Works() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserProfile />}>
          <Route path="/info" element={<UserStatus />} />
          <Route path="/events" element={<UserEvents />} />
          <Route path="/myevents" element={<UserMyEvents />} />
          <Route path="/friends" element={<UserFriends />} />
          <Route path="/membership" element={<UserMembership />} />
        </Route>
        {/* <Route path="/event" element={<Events />} /> */}
        {/* <Route path="/myevent" element={<MyEvents />} /> */}
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/contacts" element={<Contacts />} />
        
      </Routes>
    </div >
  )
}
