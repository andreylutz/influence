const initialState = {};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENT':
      return action.payload;
    case 'ADD_EVENT':
      return action.payload;
    default:
      return state;
  }
};

export default eventReducer;
