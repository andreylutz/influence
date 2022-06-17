import React, { useRef, useState } from 'react';
import './signup.css';

const Signup = () => {

  const [show, setShow] = useState(false);
  const inputtwo = useRef();
  const inputthree = useRef();
  const inputfor = useRef();


  const handleClose = (event) => {
    event.preventDefault();

    async function fetchUserData() {
      const response = await fetch('http://localhost:4000/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          userEmail: inputtwo.current.value,
          userPassword: inputthree.current.value,
          role: inputfor.current.value,
        }),
  
      });
      const text = await response.json();
      console.log(text);
    }
    fetchUserData()
    window.location.assign('/')
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
        <input ref={inputtwo} type='text' className='pols' name='userEmail' placeholder='Введите e-mail'/>
        <input ref={inputthree} type='password' className='pols' name='userPassword' placeholder='Придумайте пароль'/>
        <input ref={inputthree} type='password' className='pols' name='userPasswordRepeat' placeholder='Подтвердите пароль'/>
        <select ref={inputfor} className='selectorius' name="role">
          <option value="user">Ваш статус в проекте USER</option>
          <option value="company">Ваш статус в проекте COMPANY</option>
       </select>
        <button onClick={handleClose} type='button' className='click' name='authBatton'>Зарегистрироваться</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Signup;
