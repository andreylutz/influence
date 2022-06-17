import React from 'react';
import { Link } from 'react-router-dom';

import './MyEvent.css';

export const MyEvent = ({ event }) => {
  return (
    <li className="my-event">
      <h4>Название: {event.name}</h4>
      <p>Местоположение: {event.location}</p>
      <p>Картинка: {event.picture}</p>
      <p>Дата: {event.date.toLocaleString()}</p>
      <Link to={`/myevent/${event.id}`}>Информация</Link>
      <button onClick={'delEvent'}>Отказаться</button>
    </li>
  );
};
