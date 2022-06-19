import { instance } from './index';
import { actionsMyEvents } from '../actions/actionsMyEvents';

export const getMyEvents = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`/events`);
      dispatch(actionsMyEvents.setMyEvents(response.data.data));
    } catch (e) {
      alert(e.response.data.detail);
    }
  };

  // return async (dispatch) => {
  //   const response = await instance.get(`/events`);
  //   console.log(response.data.data);
  //   dispatch(actionsMyEvents.setMyEvents(response.data.data));
  // };
};
