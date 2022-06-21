import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionsUser } from '../../actions/actionsUser';

import './signin.css';

const Signin = () => {

const {
register,
formState: {
  errors,
},
handleSubmit,
} = useForm({
  mode: 'onBlur',
});
 
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [show, setShow] = useState(false); 
  const [text, setText] = useState(''); 

  const handleClose = async (data) => {
    const response = await fetch('http://localhost:4000/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const user = await response.json();
    console.log(user)
    
    if(user.hasOwnProperty('id')) {
      dispatch(actionsUser.setUser(user));
      dispatch(actionsUser.initUser());
      nav('/');
      setShow(false);
    } else {
      setText((text) => 'Имя пользователя или пароль не верный.')
    }
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
          <p style={{color: 'red',fontSize: '15px'}}>{text}</p>
          <form onSubmit={handleSubmit(handleClose)} className="signin-body">
            <input
            { ...register('userEmail',{
              required: 'Поле обязательно к заполнению.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный адрес электронной почты."
              }
            } )}
              type="email"
              className="pols"
              placeholder="Введите e-mail"
            />
             <div style={{height: 40,}}>{errors?.userEmail && <p style={{color: 'red',fontSize: '13px'}}>{errors?.userEmail?.message || "Error!"}</p>}</div>
            <input
            {...register('userPassword',{
              required: 'Поле обязательно к заполнению.',
              minLength: {
                value: 8,
                message: 'Минимум 8 символов'
              }
            } )}
              type="password"
              className="pols"
              id="myInput"
              minLength="8"
              placeholder="Введите пароль"
            />
            <div style={{height: 40,}}>{errors?.userPassword && <p style={{color: 'red',fontSize: '13px'}}>{errors?.userPassword?.message || "Error!"}</p>}</div>
            <button
              type='submit'
              className="click"
              name="authBatton"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
