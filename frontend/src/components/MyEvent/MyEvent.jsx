import React from 'react';
import { Link } from 'react-router-dom';

import './MyEvent.css';
import { removeEvent } from '../../api/Events';
import { useDispatch, useSelector } from 'react-redux';

const MyEvent = ({ event }) => {
  const userid = useSelector((state) => state.user.id);
  const userRole = useSelector((state) => state.user.role);
  const dispatch = useDispatch();

  const delEvent = () => {
    dispatch(removeEvent(event.id));
  };

  return (
    <li className="my-event">
      <h5 className="my-event__name">{event.name}</h5>
      <p className="my-event__location">{event.location}</p>
      <p className="my-event__img">
        <img style={{ width: '100px' }} src={event.picture} alt="" />
      </p>
      <p className="my-event__date">Дата: {event.date}</p>
      <Link className="my-event__link" to={`/myevent/${event.id}`}>
        Информация
      </Link>
      {event.user_id === userid && userRole === 'company' && (
        <button className="eventInfo__btn" onClick={delEvent}>
          Удалить
        </button>
      )}
    </li>
  );
};

export default MyEvent;
