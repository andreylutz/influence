import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionsUser } from '../../actions/actionsUser';

import './signup.css';

const Signup = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const handleClose = async (data) => {
    const response = await fetch('http://localhost:4000/api/reg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const user = await response.json();

    localStorage.setItem('token', JSON.stringify(user));

    if (user.hasOwnProperty('id')) {
      dispatch(actionsUser.setUser(user));
      dispatch(actionsUser.initUser());
      nav('/');
      setShow(false);
    } else {
      setText((text) => 'Пользователь с таким именем уже зарегестрирован.');
    }
  };

  return (
    <div id="openRega" className="signup">
      <div className="signup-dialog">
        <div className="signup-content">
          <div className="signup-header">
            <h3 className="signup-title">Регистрация</h3>
            <a href="/" title="Close" className="close">
              ×
            </a>
          </div>
          <p className="errorMain">{text}</p>
          <form onSubmit={handleSubmit(handleClose)} className="signup-body">
            <input
              {...register('userEmail', {
                required: 'Поле обязательно к заполнению.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Неверный адрес электронной почты.',
                },
              })}
              type="email"
              className="pols"
              placeholder="Введите e-mail"
            />
            <div className="errorMain" style={{ height: 40 }}>
              {errors?.userEmail && (
                <p style={{ color: 'red', fontSize: '13px' }}>
                  {errors?.userEmail?.message || 'Error!'}
                </p>
              )}
            </div>
            <input
              {...register('userPassword', {
                required: 'Поле обязательно к заполнению.',
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов',
                },
              })}
              type="password"
              className="pols"
              minLength="8"
              placeholder="Придумайте пароль"
            />
            <div className="errorMain" style={{ height: 40 }}>
              {errors?.userPassword && (
                <p style={{ color: 'red', fontSize: '13px' }}>
                  {errors?.userPassword?.message || 'Error!'}
                </p>
              )}
            </div>
            {/* <input ref={inputthree} type='password' className='pols' name='userPasswordRepeat' placeholder='Подтвердите пароль'/> */}
            <select
              {...register('role', {
                required: 'Поле обязательно к заполнению.',
              })}
              className="selectorius"
            >
              <option value="user" defaultValue>
                Ваш статус в проекте USER
              </option>
              <option value="company">Ваш статус в проекте COMPANY</option>
            </select>
            <button type="submit" className="click" name="authBatton">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
