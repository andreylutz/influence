const initialState = {};

const myEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.payload;
    case 'REMOVE_EVENT':
      return action.payload;
    default:
      return state;
  }
};

export default myEventReducer;
