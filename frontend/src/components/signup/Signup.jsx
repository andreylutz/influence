import React, { useRef, useState } from 'react';
import './signup.css';

const Signup = () => {

  const [show, setShow] = useState(false);
  const inputtwo = useRef();
  const inputthree = useRef();

  const handleClose = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:2500/registrate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username: inputtwo.current.value,
        password: inputthree.current.value,
      }),

    });
    const text = await response.json();

    window.location.assign('/')

    console.log(text);

    setShow(false);
  };


  return (
  <div id="openRega" className="signup">
  <div className="signup-dialog">
    <div className="signup-content">
      <div className="signup-header">
        <h3 className="signup-title">Регистрация</h3>
        <a href="/" title="Close" className="close">×</a>
      </div>
      <div className="signup-body">    
        <input ref={inputtwo} type='text' className='pols' name='userName' placeholder='Введите e-mail'/>
        <input ref={inputthree} type='password' className='pols' name='userPassword' placeholder='Придумайте пароль'/>
        <input ref={inputthree} type='password' className='pols' name='userPasswordRepeat' placeholder='Подтвердите пароль'/>
        <button onClick={handleClose} type='button' className='click' name='authBatton'>Зарегистрироваться</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Signup;
