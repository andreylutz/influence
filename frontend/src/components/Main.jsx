import React from 'react';
import Signup from './signup/Signup';
import Signin from './signin/Signin';

export const Main = () => {

  const handleClose = () => {
    fetch('http://localhost:4000/api/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
  }

  return (
      <>
      <a href="#openAuth">Авторизация</a>
      <a href="#openRega">Регистрация</a>
      <button type='button' onClick={handleClose}>Выход</button>
      <Signup/>
      <Signin/>
      </>
  )
};
