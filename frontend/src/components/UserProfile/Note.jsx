import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


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
    <li key={el.id}>{el.title}<button onClick={delItem}>delete</button></li>
  )
}
