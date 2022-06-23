import { REMOVE_EVENT, ADD_EVENT, SET_EVENTS } from '../../actions/actionsMyEvents';

const initialState = {
  list: [],
};

const myEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return { ...state, list: [...action.payload] };
    case ADD_EVENT:
      return { ...state, list: [action.payload, ...state.list] };
    case REMOVE_EVENT:
      return { ...state, list: state.list.filter((el) => el.id !== action.payload) };
    default:
      return state;
  }
};

export default myEventReducer;
