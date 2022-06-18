export const SET_EVENTS = 'SET_EVENTS';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const actionsMyEvents = {
  setMyEvents: (myEvents) => ({
    type: SET_EVENTS,
    payload: myEvents,
  }),
  removeMyEvent: (idUser, idEvent) => ({
    type: REMOVE_EVENT,
    payload: {
      idUser,
      idEvent,
    },
  }),
};
