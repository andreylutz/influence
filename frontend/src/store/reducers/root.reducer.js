import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import eventReducer from './event.reducer';

import myEventReducer from './myEvent.reducer';

import userSettingsReducer from './userSettings.reducer';


const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  myEvent: myEventReducer,
  settings: userSettingsReducer,
});

export default rootReducer;
