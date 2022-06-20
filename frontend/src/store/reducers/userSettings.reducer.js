const initialState = {
  list: [],
};

const userSettingsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'INIT_CATEGORIES':
      console.log(action.payload);
      return {
        ...prevState,
        list: action.payload,
      }

    default: {
      return prevState;
    }



  }
}

export default userSettingsReducer;
