import { React, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionsUser } from '../../actions/actionsUser';
import { v4 as uuidv4 } from 'uuid';
import './UserFriends.css';
import Button from'../UI/Button';

export default function UserFriends() {

  const uniKey = uuidv4();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const mainEmail = useSelector(state => state.user.email)
  const [mail, setMail] = useState("frends__img-none");
  
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  
  const handleClose = async (data) => {
    
      const response = await fetch('http://localhost:4000/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        ...data, uniKey, mainEmail
      }),
    });
    const user = await response.json();
    console.log(user.message)
      dispatch(actionsUser.setUser(user));
      dispatch(actionsUser.initUser());
      reset()
      setMail((mail) => 'frends__img-block')
      setTimeout(() => setMail((mail) => "frends__img-none"), 3500)
  }

  return (
    <div className='user__friends-container'>
      <div className="user__friends-box">
          <h3>Отправить приглашение</h3>
        <form onSubmit={handleSubmit(handleClose)} className="frends-body">
          <div className='errorFrends' style={{height: 40,}}>{errors?.FrendsEmail && <p style={{color: 'green',fontSize: '13px'}}>{errors?.FrendsEmail?.message || "Error!"}</p>}</div>
          <input
            { ...register('FrendsEmail',{
              required: 'Поле обязательно к заполнению.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Упс... Мы не можем отправить приглашение на этот адрес =("
              }
            } )}
              type="text"
              className="frends-pols"
              placeholder="Введите e-mail"
            />
            <Button title={'Отправить'}/>
        </form>
            <img className={mail} src='http://www.maxphoto.lu/contact-form/files/mikaflakes_mailicon_2.gif'/>
        </div>
    </div>
  )
}
