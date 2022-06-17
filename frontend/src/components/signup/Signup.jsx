import React, { useRef, useState } from 'react';
import './signup.css';

const Signup = () => {

  const [show, setShow] = useState(false);
  const inputtwo = useRef();
  const inputthree = useRef();
  const inputforComp = useRef();
  const inputforUser = useRef();


  const handleClose = () => {
    console.log(inputforComp.current.value);

  //   async function fetchUserData() {
  //     const response = await fetch('http://localhost:4000/api/auth', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       credentials: 'include',
  //       body: JSON.stringify({
  //         userEmail: inputtwo.current.value,
  //         userPassword: inputthree.current.value,
  //         role: inputfor.current.value,
  //       }),
  
  //     });
  //     const text = await response.json();
  //     console.log(text);
  //   }
  //   fetchUserData()


    // window.location.assign('/')

    // console.log(text);

    // setShow(false);
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
        {/* <input ref={inputthree} type='password' className='pols' name='userPasswordRepeat' placeholder='Подтвердите пароль'/> */}
        <label htmlFor="contactChoice1"><input ref={inputforComp} type="radio" id="contactChoice1" name="company" value="company" defaultChecked/>Компания</label>
        <label htmlFor="contactChoice2"><input ref={inputforUser} type="radio" id="contactChoice2" name="user" value="user" defaultChecked/>Пользователь</label>
        <button onClick={handleClose} type='button' className='click' name='authBatton'>Зарегистрироваться</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Signup;
