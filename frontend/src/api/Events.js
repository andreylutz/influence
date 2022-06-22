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
  return async (dispatch) => {
    try {
      const response = await instance.post(`/events/new`, {
        data: {
          name: eventName,
          description: eventDescription,
          location: location,
          picture: picture,
          date: eventDate,
        },
      });

      dispatch(actionsMyEvents.addEvent(response.data.data));
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};

// Remove Event
export const removeEvent = (idEvent) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/events/${idEvent}`);

      dispatch(actionsMyEvents.removeMyEvent(idEvent));
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};
