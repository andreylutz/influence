import { instance } from './index';
import { actionsMyEvents } from '../actions/actionsMyEvents';

export const getEvents = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`/events`);

      dispatch(actionsMyEvents.setMyEvents(response.data.data));
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};

export const getMyEvents = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`/events/my`);

      dispatch(actionsMyEvents.setMyEvents(response.data.data));
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};

// Add Event
export const addEvent = (eventName, eventDescription, location, picture, eventDate) => {
  return async () => {
    try {
      await instance.post(`/events/new`, {
        data: {
          name: eventName,
          description: eventDescription,
          location: location,
          picture: picture,
          date: eventDate,
        },
      });
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};
