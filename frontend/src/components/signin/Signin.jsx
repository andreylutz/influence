import React, { useRef, useState } from 'react';
import './signin.css';

const Signin = () => {

  const [show, setShow] = useState(false);
  const inputtwo = useRef();
  const inputthree = useRef();
  

  const handleClose = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:2500/auth', {
      method: 'POST',
      body: JSON.stringify({
        username: inputtwo.current.value,
        password: inputthree.current.value,
      }),
      headers: { 'Content-Type': 'application/json' },

    });
    const text = await response.json();
    window.location.assign('/')
    console.log(text);
    setShow(false);
  };

  return (
    <div id="openAuth" className="signin">
  <div className="signin-dialog">
    <div className="signin-content">
      <div className="signin-header">
        <h3 className="signin-title">Авторизация</h3>
        <a href="/" title="Close" className="close">×</a>
      </div>
      <div className="signin-body">
        <input ref={inputtwo} type='e-mail' className='pols' name='userName' placeholder='Введите e-mail'/>
        <input ref={inputthree} type='password' className='pols' name='userPassword' placeholder='Введите пароль'/>
        <button onClick={handleClose} type='button' className='click' name='authBatton'>Войти</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Signin;
