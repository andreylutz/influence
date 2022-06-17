const initialState = { auth: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, auth: true };
    case 'LOGOUT_USER':
      return { ...state, auth: false };
    default:
      return state;
  }
};

export default userReducer;
