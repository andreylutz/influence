import React from 'react';
import { Link } from 'react-router-dom';

import './MyEvent.css';

const MyEvent = ({ event }) => {
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
    </li>
  );
};

export default MyEvent;
