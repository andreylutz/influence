import {
  REMOVE_EVENT,
  ADD_EVENT,
  EDIT_EVENT,
  SET_EVENTS,
} from '../../actions/actionsMyEvents';

const initialState = {
  list: [],
};

const myEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return { ...state, list: [...action.payload] };
    case ADD_EVENT:
      return { ...state, list: [action.payload, ...state.list] };
    case EDIT_EVENT:
      // console.log('Start Edit');
      return {
        ...state,
        list: state.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                name: action.payload.name,
                description: action.payload.description,
                location: action.payload.location,
                picture: action.payload.picture,
                date: action.payload.date,
              }
            : el,
        ),
      };
    case REMOVE_EVENT:
      return { ...state, list: state.list.filter((el) => el.id !== action.payload) };
    default:
      return state;
  }
};

export default myEventReducer;
