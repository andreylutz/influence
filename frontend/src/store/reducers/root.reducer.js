import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import eventReducer from './event.reducer';
import userSettingsReducer from './userSettings.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  settings: userSettingsReducer,
});

export default rootReducer;
