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
    <Link className="my-event__link" to={`/myevent/${event.id}`}>
      <li className="my-event">
        <p className="my-event__img">
          <img style={{ width: '100%', height: '400px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px',borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', }} src={event.picture} alt="" />
        </p>
        <h2 className="my-event__name">{event.name}</h2>
        <p className="my-event__location">{event.location}</p>
        <p className="my-event__date">Дата: {event.date}</p>
        
        {/* {
          event.user_id === userid && userRole === 'company' && (
            <button className="eventInfo__btn" onClick={delEvent}>
              Удалить
            </button>
          )
        } */}
      </li >
    </Link>
  );
};

export default MyEvent;
