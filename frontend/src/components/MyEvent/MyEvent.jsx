import React from 'react';
import { Link } from 'react-router-dom';

import './MyEvent.css';

const MyEvent = ({ event }) => {
  return (
    <li className="my-event">
      <h5 className="my-event__name">Название: {event.name}</h5>
      <p className="my-event__location">{event.location}</p>
      <p>
        <img style={{ width: '100px' }} src={event.picture} alt="" />
      </p>
      <p>Дата: {event.date}</p>
      <Link to={`/myevent/${event.id}`}>Информация</Link>
    </li>
  );
};

export default MyEvent;
