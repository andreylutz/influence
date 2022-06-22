import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionsUser } from '../../actions/actionsUser';

import './signup.css';
import './Button.scss';

const Signup = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [show, setShow] = useState(false); 
  const [text, setText] = useState(''); 
  

  const {
    register,
    formState: {
      errors,
    },
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
    if(user.hasOwnProperty('id')) {
      dispatch(actionsUser.setUser(user));
      dispatch(actionsUser.initUser());
      nav('/');
      setShow(false);
    } else {
      setText((text) => user.message)
    }
  }


  return (
    <div id="openRega" className="signup">
      <div className="signup-dialog">
        <div className="signup-content">
          <div className="signup-header">
            <h3 className="signup-title">Регистрация</h3>
            <a href="/" title="Close" className="signup-close">
              ×
            </a>
          </div>
          <p className='errorMain'>{text}</p>
          <form onSubmit={handleSubmit(handleClose)} className="signup-body">
            <input
            { ...register('userEmail',{
              required: 'Поле обязательно к заполнению.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный адрес электронной почты."
              }
            } )}
              type="email"
              className="signup-pols"
              placeholder="Введите e-mail"
            />
            <div className='errorMain' style={{height: 40,}}>{errors?.userEmail && <p style={{color: 'red',fontSize: '13px'}}>{errors?.userEmail?.message || "Error!"}</p>}</div>
            <input
            {...register('userPassword',{
              required: 'Поле обязательно к заполнению.',
              minLength: {
                value: 8,
                message: 'Минимум 8 символов'
              }
            } )}
              type="password"
              className="signup-pols"
              minLength="8"
              placeholder="Придумайте пароль"
            />
            <div className='errorMain' style={{height: 40,}}>{errors?.userPassword && <p style={{color: 'red',fontSize: '13px'}}>{errors?.userPassword?.message || "Error!"}</p>}</div>
            <input
            {...register('userPasswordRepl',{
              required: 'Поле обязательно к заполнению.',
              minLength: {
                value: 8,
                message: 'Минимум 8 символов'
              }
            } )}
              type="password"
              className="signup-pols"
              minLength="8"
              placeholder="Подтвердите пароль"
            />
            <div className='errorMain' style={{height: 40,}}>{errors?.userPasswordRepl && <p style={{color: 'red',fontSize: '13px'}}>{errors?.userPasswordRepl?.message || "Error!"}</p>}</div>
              <input
              {...register('userKey',{
                required: 'Поле обязательно к заполнению.'
              } )}
                type="text"
                className="signup-pols"
                placeholder="Введите уникальный ключ регистрации"
              />
              <div className='errorMain' style={{height: 40,}}>{errors?.userKey && <p style={{color: 'red',fontSize: '13px'}}>{errors?.userKey?.message || "Error!"}</p>}</div>
            <select 
            {...register('role',{
              required: 'Поле обязательно к заполнению.',
            } )}
            className="signup-selectorius" 
            >
              <option value="user" defaultValue>Ваш статус USER</option>
              <option value="company">Ваш статус COMPANY</option>
            </select>
            <button
              type='submit'
              className="signup-click"
              name="signup-authBatton"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
