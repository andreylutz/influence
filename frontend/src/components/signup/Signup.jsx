import React, { useRef, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './signup.css';

const Signup = () => {
  // const navigate = useNavigate();
  const [show, setShow] = useState(false);// не используем show модельные окна
  const inputtwo = useRef();
  const inputthree = useRef();
  const inputfor = useRef();


  const handleClose =  async (event) => {
    event.preventDefault();
      const response = await fetch('http://localhost:4000/api/reg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          userEmail: inputtwo.current.value,
          userPassword: inputthree.current.value,
          role: inputfor.current.value,
        }),
      });
      const user = await response.json();
      // navigate('/');
      localStorage.setItem('user', JSON.stringify(user));
      window.location.assign('/');
      setShow(false);
    }

  return (
  <div id="openRega" className="signup">
  <div className="signup-dialog">
    <div className="signup-content">
      <div className="signup-header">
        <h3 className="signup-title">Регистрация</h3>
        <a href="/" title="Close" className="close">×</a>
      </div>
      <div className="signup-body">    
        <input ref={inputtwo} type='email' className='pols' name='userEmail' placeholder='Введите e-mail'required/>
        <input ref={inputthree} type='password' className='pols' name='userPassword' placeholder='Придумайте пароль'required/>
        <input ref={inputthree} type='password' className='pols' name='userPasswordRepeat' placeholder='Подтвердите пароль'required/>
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
