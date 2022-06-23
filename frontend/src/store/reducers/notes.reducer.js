import { REMOVE_NOTES, SET_NOTES, ADD_NOTE } from "../../actions/actionNotes";

const initialState = {
  list: [],
};

const myNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTES:
      return { ...state, list: [...action.payload] };
    case REMOVE_NOTES:
      // console.log(action.payload);
      return { ...state, list: state.list.filter((el) => el.id !== action.payload) }
    case ADD_NOTE:
      return { ...state, list: [...state.list, action.payload] }
    default:
      return state;
  }
};

export default myNoteReducer;
