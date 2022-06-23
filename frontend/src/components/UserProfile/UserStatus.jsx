import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { actionNotes } from '../../actions/actionNotes';


import Note from './Note';

export default function UserStatus() {
  const notes = useSelector(state => state.note.list)
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();


  const us = useSelector(state => state.user.id)


  const onSubmit = async (data) => {

    const response = await fetch('http://localhost:4000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ ...data, us }),
    });
    const dbNotes = await response.json();
    dispatch(actionNotes.addNote(dbNotes))
  }

  useEffect(() => {
    const fetchAsync = async () => {
      const response = await fetch('http://localhost:4000/api/notes', {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
        credentials: 'include',
        // body: JSON.stringify({ us }),
      });
      const dbNotes = await response.json();


      dispatch(actionNotes.setNotes(dbNotes));
    }
    fetchAsync();
  }, [])



  return (
    <div className='user__status-container'>
      <div className='user__status-box'>
        <ul>
          {/* {(user) ? <h4 className='user__status-about'>{user.name}</h4> : <h4>Добавьте имя</h4>} */}
        </ul>
      </div>
      <div className='user__status-rigth' >
        <div className='user__status-wall'>
          <h4 className='user__status-title'>Создать заметку</h4>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input required {...register('header')} className='user__status-header' type="text" placeholder='Заголовок' />
            <textarea {...register('textarea')} required className='user__textarea' placeholder='Что сегодня у тебя на уме?' id="" cols="64.5" rows="5"></textarea>
            <button className='user__status-btn'>Добавить</button>
          </form>
        </div>
        <div className='user__status-notes'>
          <h4 className='user__status-title'>Заметки:</h4>
          {/* <p>{state[0].title}</p> */}
          <ul>
            {notes.map((el) => <Note el={el}/>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
