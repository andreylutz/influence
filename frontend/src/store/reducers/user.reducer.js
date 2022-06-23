import { INIT_USER, LOGOUT_USER, SET_USER } from '../../actions/actionsUser';

const initialState = { auth: false, id: null, email: '', role: '' };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return { ...state, auth: true };
    case SET_USER:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        role: action.payload.role,
      };
    case LOGOUT_USER:
      localStorage.clear();

      return { ...state, auth: false, id: null, email: '', role: '' };
    default:
      return state;
  }
};

export default userReducer;
