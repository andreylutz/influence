const initialState = { auth: false, role: '' };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_USER':
      return { ...state, auth: true };
    case 'SET_USER':
      return { ...state, role: action.payload };
    case 'LOGOUT_USER':
      return { ...state, auth: false };
    default:
      return state;
  }
};

export default userReducer;
