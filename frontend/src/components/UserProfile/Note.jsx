import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../UserProfile/UserProfile.css'

import { actionNotes } from '../../actions/actionNotes';

export default function Note({ el }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  // const us = useSelector(state => state.user.id)



  const delItem = async () => {
    const response = await fetch(`http://localhost:4000/api/notes/${el.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      // body: JSON.stringify({ us }),
    });
    const idItem = await response.json();
    dispatch(actionNotes.removeNotes(idItem))
    nav('/info')
  }






  return (
    <li className='singleNote' key={el.id}>
      <div>
        <h4>{el.title}</h4>
        <p>{el.description}</p>
      </div>
      <div>
        <button className='singleBtn' onClick={delItem}>Удалить</button>
      </div>
    </li>
  )
}
