import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import eventReducer from './event.reducer';

import myEventReducer from './myEvent.reducer';
import themeReducer from '../reducers/theme.reducer';
import userSettingsReducer from './userSettings.reducer';
import myNoteReducer from './notes.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  myEvent: myEventReducer,
  settings: userSettingsReducer,
  note: myNoteReducer,
  theme: themeReducer,
});

export default rootReducer;
