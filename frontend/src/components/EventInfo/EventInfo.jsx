import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './EventInfo.css';

const EventInfo = () => {
  const { id } = useParams();

  const event = useSelector((state) =>
    state.myEvent.list.find((el) => el.id === Number(id)),
  );

  const Subscribe = () => {};
  // const delEvent = () => {};

  return (
    <div className="eventInfoContainer">
      <div className="eventInfo">
        <h4>Название: {event.name}</h4>
        <p>
          <img style={{ width: '200px' }} src={event.picture} alt="" />
        </p>
        <p>Местоположение: {event.location}</p>

        <p>Дата: {event.date}</p>
        <button onClick={Subscribe}>Отказаться</button>
      </div>
    </div>
  );
};

export default EventInfo;
