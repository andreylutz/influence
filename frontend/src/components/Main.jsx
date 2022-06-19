import React from 'react';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import { useDispatch } from 'react-redux';
import { actionsUser } from '../actions/actionsUser';

export const Main = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    fetch('http://localhost:4000/api/logout', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    dispatch(actionsUser.logout());
  };

  return (
    <>
      <a href="#openAuth">Авторизация</a>
      <a href="#openRega">Регистрация</a>
      <button type="button" onClick={handleClose}>
        Выход
      </button>
      <Signup />
      <Signin />
    </>
  );
};
