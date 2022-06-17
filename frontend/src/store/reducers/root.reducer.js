import { combineReducers } from 'redux';
import userReducer from './player.reducer';
import eventReducer from './event.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
});

export default rootReducer;
