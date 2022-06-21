import React from 'react';

import { Route, Routes } from 'react-router-dom';

// React components(JSX)
import UserProfile from './UserProfile';
import Events from '../Events/Events';
import MyEvents from '../MyEvents/MyEvents';
import UserFriends from './UserFriends';
import UserMembership from './UserMembership';
import UserStatus from './UserStatus';
import Contacts from '../Contacts/Contacts';
import AllUsersPage from '../allCategoriesPage/AllCategoriesPage';
import UserEditPage from '../UserEditPage/UserEditPage';
import EventInfo from '../EventInfo/EventInfo';

export default function Works() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserProfile />}>
          <Route path="/info" element={<UserStatus />} />
          <Route path="/friends" element={<UserFriends />} />
          <Route path="/membership" element={<UserMembership />} />
        </Route>
        <Route path="/myevent" element={<MyEvents />} />
        <Route path="/event" element={<Events />} />
        <Route path="/myevent/:id" element={<EventInfo />} />
        <Route path="/influencers" element={<AllUsersPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/userEdit" element={<UserEditPage />} />
      </Routes>
    </div>
  );
}
