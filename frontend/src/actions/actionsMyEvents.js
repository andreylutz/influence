export const SET_EVENTS = 'SET_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const actionsMyEvents = {
  setMyEvents: (myEvents) => ({
    type: SET_EVENTS,
    payload: myEvents,
  }),
  addEvent: (event) => ({
    type: ADD_EVENT,
    payload: event,
  }),
  editEvent: (event) => ({
    type: EDIT_EVENT,
    payload: event,
  }),
  removeMyEvent: (idEvent) => ({
    type: REMOVE_EVENT,
    payload: idEvent,
  }),
};
