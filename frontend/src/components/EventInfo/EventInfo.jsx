import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './EventInfo.css';
import { editEvent, removeEvent } from '../../api/Events';

const EventInfo = () => {
  const [stateEdit, setStateEdit] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userid = useSelector((state) => state.user.id);
  const userRole = useSelector((state) => state.user.role);

  const eventList = useSelector((state) => state.myEvent.list);
  const event = eventList.find((el) => el.id === Number(id));

  const Subscribe = () => {};

  const delEvent = () => {
    const del = window.confirm('Вы действительно хотите удалить Событие?');

    if (del) {
      dispatch(removeEvent(id));
      navigate('/');
    }
  };

  const editMyEvent = () => {
    setStateEdit((stateEdit) => !stateEdit);
  };

  const patchFormEvent = (e) => {
    e.preventDefault();

    const data = {
      idEvent: id,
      eventName: e.target.eventName.value,
      eventDescription: e.target.eventDescription.value,
      location: e.target.location.value,
      picture: e.target.picture.value,
      eventDate: e.target.eventDate.value,
    };

    dispatch(editEvent(data));
    navigate('/');

    e.target.reset();
  };

  return (
    <div className="eventInfoContainer">
      <div className="eventInfo">
        {event ? (
          <>
            <h4 className="eventInfo__title">Название: {event.name}</h4>
            <div className="eventInfo__desc">Описание: {event.description}</div>
            <p className="eventInfo__img">
              <img style={{ width: '250px' }} src={event.picture} alt="" />
            </p>
            <p>Местоположение: {event.location}</p>

            <p className="eventInfo__date">Дата: {event.date}</p>
            <div>
              <button className="eventInfo__btn" onClick={Subscribe}>
                Подписаться
              </button>
              {event.user_id === userid && userRole === 'company' && (
                <button className="eventInfo__btn" onClick={editMyEvent}>
                  Изменить
                </button>
              )}
              {event.user_id === userid && userRole === 'company' && (
                <button className="eventInfo__btn" onClick={delEvent}>
                  Удалить
                </button>
              )}
            </div>

            {stateEdit && (
              <>
                <h3 className="eventTitle">Изменить Мероприятие</h3>
                <form className="addEventForm" onSubmit={patchFormEvent}>
                  <div className="form-group">
                    <input
                      id="eventName"
                      className="form-control"
                      name="eventName"
                      type="text"
                      required
                      defaultValue={event.name}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="eventDescription"
                      className="form-control__input"
                      name="eventDescription"
                      required
                      defaultValue={event.description}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="location"
                      className="form-control"
                      name="location"
                      type="text"
                      required
                      defaultValue={event.location}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="picture"
                      className="form-control"
                      name="picture"
                      type="text"
                      required
                      defaultValue={event.picture}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="eventDate"
                      className="form-control"
                      name="eventDate"
                      type="date"
                      required
                      defaultValue={event.date}
                    />
                  </div>
                  <button type="submit" className="btn-events">
                    Изменить Мероприятие
                  </button>
                </form>
              </>
            )}
          </>
        ) : (
          <p>Тут должно быть Событие</p>
        )}
      </div>
    </div>
  );
};

export default EventInfo;
