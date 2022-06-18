import React from 'react';
import { Outlet } from 'react-router-dom';

import '../UserProfile/UserProfile.css'
import UserStatic from '../UserProfile/UserStatic';


export default function UserProfile() {

  return (
    <>
      <UserStatic />
      <Outlet />
    </>
  )
}
