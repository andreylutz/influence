import React from 'react';
import { Outlet } from 'react-router-dom';

// Styles
import '../UserProfile/UserProfile.css'

// React Components
import UserStatic from '../UserProfile/UserStatic';


export default function UserProfile() {

  return (
    <>
      <UserStatic />
      
      <Outlet />
    </>
  )
}
