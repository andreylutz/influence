import axios from 'axios';

let instance = axios.create({
  baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
});

const initialState = {};

export const myEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return action.payload;
    case 'ADD_EVENT':
      return action.payload;
    default:
      return state;
  }
};

const getMyEvents = () => (dispatch) => ({ type: 'GET_EVENTS' });

export const getMyEvents = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get(`cards/`);
      dispatch(actionsCards.setCards(response.data));
      dispatch(initUser());
    } catch (e) {
      alert(e.response.data.detail);
    }
  };
};
