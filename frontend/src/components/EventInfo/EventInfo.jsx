import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './EventInfo.css';
import { removeEvent } from '../../api/Events';

const EventInfo = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const dispatch = useDispatch();
  const userid = useSelector((state) => state.user.id);
  const userRole = useSelector((state) => state.user.role);

  const event = useSelector((state) =>
    state.myEvent.list.find((el) => el.id === Number(id)),
  );

  const Subscribe = () => {};

  const delEvent = (id) => {
    dispatch(removeEvent(id));
    nav('/myevent');
  };

  return (
    <div className="eventInfoContainer">
      <div className="eventInfo">
        <h4 className="eventInfo__title">Название: {event.name}</h4>
        <div className="eventInfo__desc">Описание: {event.description}</div>
        <p className="eventInfo__img">
          <img style={{ width: '250px' }} src={event.picture} alt="" />
        </p>
        <p>Местоположение: {event.location}</p>

        <p className="eventInfo__date">Дата: {event.date}</p>
        <button className="eventInfo__btn" onClick={Subscribe}>
          Подписаться
        </button>
        {event.user_id === userid && userRole === 'company' && (
          <button className="eventInfo__btn" onClick={delEvent}>
            Удалить
          </button>
        )}
      </div>
    </div>
  );
};

export default EventInfo;
