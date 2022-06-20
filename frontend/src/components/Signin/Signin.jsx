import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionsUser } from '../../actions/actionsUser';

import './signin.css';

const Signin = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [show, setShow] = useState(false); // не используем show модельные окна
  const inputtwo = useRef();
  const inputthree = useRef();

  const handleClose = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        userEmail: inputtwo.current.value,
        userPassword: inputthree.current.value,
      }),
    });
    const user = await response.json();

    dispatch(actionsUser.setUser(user));
    dispatch(actionsUser.initUser());

    nav('/');
    setShow(false);
  };

  return (
    <div id="openAuth" className="signin">
      <div className="signin-dialog">
        <div className="signin-content">
          <div className="signin-header">
            <h3 className="signin-title">Авторизация</h3>
            <a href="/" title="Close" className="close">
              ×
            </a>
          </div>
          <div className="signin-body">
            <input
              ref={inputtwo}
              type="email"
              className="pols"
              name="userEmail"
              placeholder="Введите e-mail"
            />
            <input
              ref={inputthree}
              type="password"
              className="pols"
              name="userPassword"
              placeholder="Введите пароль"
            />
            <button
              onClick={handleClose}
              type="button"
              className="click"
              name="authBatton"
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
