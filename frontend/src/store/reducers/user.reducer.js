import { INIT_USER, LOGOUT_USER, SET_USER } from '../../actions/actionsUser';

const initialState = { auth: false, email: '', role: '' };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return { ...state, auth: true };
    case SET_USER:
      return { ...state, email: action.payload, role: action.payload };
    case LOGOUT_USER:
      return { ...state, auth: false };
    default:
      return state;
  }
};

export default userReducer;
