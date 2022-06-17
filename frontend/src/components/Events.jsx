import React from 'react';
import Signup from './signup/Signup';
import Signin from './signin/Signin';

export const Events = () => {
  return (
      <>
      <a href="#openAuth">Авторизация</a>
      <a href="#openRega">Регистрация</a>
      <Signup/>
      <Signin/>
      </>
  )
};
