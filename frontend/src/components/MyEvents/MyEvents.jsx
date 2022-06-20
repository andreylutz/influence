import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMyEvents } from '../../api/Events';
import MyEvent from '../MyEvent/MyEvent';
import './MyEvents.css';

export const MyEvents = () => {
  const myEvents = useSelector((state) => state.myEvent.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyEvents());
  }, []);

  const addEvent = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>Добавить новое Событие</h3>

      <form onSubmit={addEvent}>
        <div className="form-group mb-3">
          <label htmlFor="event_name" className="form-label">
            Название События:
            <input
              id="event_name"
              className="form-control"
              name="event_name"
              type="text"
              required
              title="Введите название События"
            />
          </label>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="location" className="form-label">
            Адрес События:
            <input
              id="location"
              className="form-control"
              name="location"
              type="text"
              required
              title="Введите адрес События"
            />
          </label>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="event_date" className="form-label">
            Дата События:
            <input
              id="event_date"
              className="form-control"
              name="event_date"
              type="datetime-local"
              required
              title="Введите дату События"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </form>

      <ul className="my-events-list">
        {myEvents.map((el) => (
          <MyEvent event={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
};

export default MyEvents;
