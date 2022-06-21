import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addEvent, getMyEvents } from '../../api/Events';
import MyEvent from '../MyEvent/MyEvent';
import './MyEvents.css';

export const MyEvents = () => {
  const myEvents = useSelector((state) => state.myEvent.list);
  const userRole = useSelector((state) => state.user.role);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyEvents());
  }, [dispatch]);

  const addNewEvent = (e) => {
    e.preventDefault();

    const eventName = e.target.eventName.value;
    const eventDescription = e.target.eventDescription.value;
    const location = e.target.location.value;
    const eventDate = e.target.eventDate.value;

    dispatch(addEvent(eventName, eventDescription, location, eventDate));

    dispatch(getMyEvents());
  };

  return (
    <div>
      {userRole === 'company' && (
        <>
          <h3 className="eventTitle">Добавить новое Мероприятие</h3>
          <form className="addEventForm" onSubmit={addNewEvent}>
            <div className="form-group mb-3">
              <label htmlFor="eventName" className="form-label">
                Название Мероприятия:
                <input
                  id="eventName"
                  className="form-control"
                  name="eventName"
                  type="text"
                  required
                  title="Введите название Мероприятия"
                />
              </label>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="eventDescription" className="form-label">
                Описание Мероприятия:
                <textarea
                  id="eventDescription"
                  className="form-control"
                  name="eventDescription"
                  required
                  title="Введите описание Мероприятия"
                />
              </label>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="location" className="form-label">
                Адрес Мероприятия:
                <input
                  id="location"
                  className="form-control"
                  name="location"
                  type="text"
                  required
                  title="Введите адрес Мероприятия"
                />
              </label>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="eventDate" className="form-label">
                Дата Мероприятия:
                <input
                  id="eventDate"
                  className="form-control"
                  name="eventDate"
                  type="datetime-local"
                  required
                  title="Введите дату Мероприятия"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Добавить Мероприятие
            </button>
          </form>
        </>
      )}

      <ul className="my-events-list">
        {myEvents.map((el) => (
          <MyEvent event={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
};

export default MyEvents;
