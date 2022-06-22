import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addEvent, getMyEvents } from '../../api/Events';
import MyEvent from '../MyEvent/MyEvent';
import './MyEvents.css';

export const MyEvents = () => {
  // const [update, setUpdate] = useState(false);

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
    const picture = e.target.picture.value;
    const eventDate = e.target.eventDate.value;

    dispatch(addEvent(eventName, eventDescription, location, picture, eventDate));

    e.target.reset();
  };

  return (
    <div className="container-event">
      {userRole === 'company' && (
        <>
          <h3 className="eventTitle">Добавить новое Мероприятие</h3>
          <form className="addEventForm" onSubmit={addNewEvent}>
            <div className="form-group">
              <input
                id="eventName"
                className="form-control"
                name="eventName"
                type="text"
                required
                placeholder="Введите название Мероприятия"
              />
            </div>
            <div className="form-group">
              <textarea
                id="eventDescription"
                className="form-control__input"
                name="eventDescription"
                required
                placeholder="Введите описание Мероприятия"
              />
            </div>
            <div className="form-group">
              <input
                id="location"
                className="form-control"
                name="location"
                type="text"
                required
                placeholder="Введите адрес Мероприятия"
              />
            </div>
            <div className="form-group">
              <input
                id="picture"
                className="form-control"
                name="picture"
                type="text"
                required
                placeholder="Введите ссылку на фото мероприятия"
              />
            </div>
            <div className="form-group">
              <input
                id="eventDate"
                className="form-control"
                name="eventDate"
                type="datetime-local"
                required
                placeholder="Введите дату Мероприятия"
              />
            </div>
            <button type="submit" className="btn-events">
              Добавить Мероприятие
            </button>
          </form>
        </>
      )}

      <div>
        <ul className="my-events-list">
          {myEvents.map((el) => (
            <MyEvent event={el} key={el.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyEvents;
