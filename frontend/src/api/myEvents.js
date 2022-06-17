import { instance } from './index';
import { actionsMyEvents } from '../actions/myEvents';

export const getMyEvents = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`myevents/`);
      dispatch(actionsMyEvents.setMyEvents(response.data));
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};
