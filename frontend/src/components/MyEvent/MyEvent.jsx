import React from 'react';
import { Link } from 'react-router-dom';

import './MyEvent.css';

const MyEvent = ({ event }) => {
  const Subscribe = () => {};

  return (
    <li className="my-event">
      <h4>Название: {event.name}</h4>
      <p>Местоположение: {event.location}</p>
      <p>
        <img style={{ width: '100px' }} src={event.picture} alt="" />
      </p>
      <p>Дата: {event.date.toLocaleString()}</p>
      <Link to={`/myevent/${event.id}`}>Информация</Link>
      <button onClick={Subscribe}>Подписаться</button>
    </li>
  );
};

export default MyEvent;
