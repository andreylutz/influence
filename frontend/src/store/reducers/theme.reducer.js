import { SET_THEME } from '../../actions/actionsTheme';

const themeReducer = (state = 'light', { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
};

export default themeReducer;
