import { instance } from './index';
import { actionNotes } from '../actions/actionNotes';

export const getNotes = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`/info`);

      dispatch(actionNotes.setMyEvents(response.data.data));
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
export const addEvent = (eventName, eventDescription, location, eventDate) => {
  console.log(eventName, eventDescription, location, eventDate);

  return async (dispatch) => {
    try {
      const response = await instance.post(`/events/new`, {
        data: {
          name: eventName,
          description: eventDescription,
          location: location,
          date: eventDate,
        },
      });

      // dispatch(actionsMyEvents.setMyEvents(response.data.data));
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};
