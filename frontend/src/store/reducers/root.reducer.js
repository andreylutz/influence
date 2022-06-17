import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import eventReducer from './event.reducer';
import myEventReducer from './event.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  myEvent: myEventReducer,
});

export default rootReducer;
