import React from 'react';
import { useEffect } from 'react';
import { getMyEvents } from '../../store/reducers/myEvent.reducer';

import { MyEvent } from '../MyEvent/MyEvent';
import './MyEvents.css';

export const MyEvents = () => {
  // const role = 'company';
  useEffect(() => {
    getMyEvents();
  }, []);

  const myEvents = [
    { id: 1, name: 'Пиво', location: 'Москва', picture: 'test-img', date: '24.09.21' },
    { id: 2, name: 'Молоко', location: 'СПб', picture: 'test-img', date: '10.05.23' },
    { id: 3, name: 'Мото', location: 'Москва', picture: 'test-img', date: '03.09.22' },
    { id: 3, name: 'Пиво', location: 'СПб', picture: 'test-img', date: '03.09.22' },
    { id: 3, name: 'Авто', location: 'Омск', picture: 'test-img', date: '03.09.22' },
    { id: 3, name: 'Пиво', location: 'Москва', picture: 'test-img', date: '03.09.22' },
  ];

  return (
    <ul className="my-events-list">
      {myEvents.map((el) => (
        <MyEvent event={el} />
      ))}
    </ul>
  );
};
