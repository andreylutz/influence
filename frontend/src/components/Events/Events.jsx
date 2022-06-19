import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMyEvents } from '../../api/myEvents';
import MyEvent from '../MyEvent/MyEvent';
import './Events.css';

export const MyEvents = () => {
  const myEvents = useSelector((state) => state.myEvent.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyEvents());
  }, []);

  return (
    <ul className="my-events-list">
      {myEvents.map((el) => (
        <MyEvent event={el} key={el.id} />
      ))}
    </ul>
  );
};

export default MyEvents;
