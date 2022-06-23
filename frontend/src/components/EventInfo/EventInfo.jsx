import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './EventInfo.css';
import { removeEvent } from '../../api/Events';

const EventInfo = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userid = useSelector((state) => state.user.id);
  const userRole = useSelector((state) => state.user.role);

  const eventList = useSelector((state) => state.myEvent.list);
  const event = eventList.find((el) => el.id === Number(id));

  const Subscribe = () => { };

  const delEvent = () => {
    dispatch(removeEvent(id));
    navigate('/');
  };

  return (
    <div className="eventInfoContainer">
      <div className="eventInfo">
        {event ? (
          <>
            <h4 className="eventInfo__title">{event.name}</h4>
            <p className="eventInfo__img">
              <img style={{ width: '55%', borderRadius: '15px' }} src={event.picture} alt="" />
            </p>
            <div className="eventInfo__desc"> {event.description}</div>
            <p>Локация: {event.location}</p>

            <p className="eventInfo__date">Дата: {event.date}</p>
            {/* <button className="eventInfo__btn" onClick={Subscribe}>
              Подписаться
            </button> */}
            {event.user_id === userid && userRole === 'company' && (
              <button className="eventInfo__btn" onClick={delEvent}>
                Удалить
              </button>
            )}
          </>
        ) : (
          <p>Test</p>
        )}
      </div>
    </div>
  );
};

export default EventInfo;
